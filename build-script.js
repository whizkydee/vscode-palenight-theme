const fs = require("fs").promises;
const glob = require("glob");

const generalErrorMessage = "Something went wrong ❌, retry script";

(async () => {
  try {
    const commonDataBuffer = await fs.readFile("templates/common.json");
    const commonDataJSON = JSON.parse(commonDataBuffer);
    const commonData = JSON.stringify(commonDataJSON);

    glob("templates/!(common)*.json", {}, async (er, files) => {
      try {
        if (er) throw er;

        for await (let file of files) {
          const [folder, fileName] = file.split("/");
          const fileContent = await fs.readFile(file);
          const fileContentObj = JSON.parse(fileContent);

          const fileKeys = Object.keys(fileContentObj);
          let newDataArray = [];

          for (let ind = 0; ind < 3; ind++) {
            const key = fileKeys[ind];
            const oldValue = `"entry-${ind + 1}"`;
            const newValue = JSON.stringify(fileContentObj[key]);

            if (newDataArray.length === 0) {
              newDataArray.push(commonData.replace(oldValue, newValue));
            } else if (fileName === "palenight.json" && ind === 2) {
              newDataArray.push(
                newDataArray[ind - 1].replace(`,${oldValue}`, "")
              );
            } else {
              newDataArray.push(
                newDataArray[ind - 1].replace(oldValue, newValue)
              );
            }
          }
          const newFileData = JSON.parse(newDataArray[newDataArray.length - 1]);
          const outputFileName =
            fileName === "palenight.json" ? fileName : `palenight-${fileName}`;

          await fs.writeFile(
            `output/${outputFileName}`,
            JSON.stringify(newFileData, null, 4)
          );

          console.log(`Done ✅. ${outputFileName} generated`);
        }
      } catch (error) {
        console.error(generalErrorMessage + "\n" + `Error: ${error}`);
      }
    });
  } catch (error) {
    console.error(generalErrorMessage + "\n" + `Error: ${error}`);
  }
})();
