const fs = require('fs')
const { promisify } = require('util')

// Promisify readFile and writeFile
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

// Read palenight default theme
readFileAsync('./src/index.json', { encoding: 'utf8' }).then(text => {
	const data = JSON.parse(text)

	themify(
		data,
		'./src/index.json',
		'./themes/palenight.json',
		'Palenight default Theme written Successfully!'
	)

	themify(
		data,
		'./src/italic.json',
		'./themes/palenight-italic.json',
		'Italic Theme written Successfully!'
	)

	themify(
		data,
		'./src/operator.json',
		'./themes/palenight-operator.json',
		'Operator Theme written Successfully!'
	)
})

// Changes we need to make for now based on diff:
// name, semanticClass, "punctuation.section.embedded.js" and add tokenColors...
function themify(data, src, dest, msg) {
	// Read italic.json and append its tokenColor to data
	readFileAsync(src, { encoding: 'utf8' })
		.then(text => {
			let json = JSON.parse(text)

			let dataCopy = JSON.parse(JSON.stringify(data))

			// Append punctuation.section.embedded.js to normalize font scope
			// Note: This mutates the object since it applies to both italic and operator
			if (dataCopy.name !== json.name) {
				dataCopy.tokenColors
					.find(
						obj =>
							obj.name.toLowerCase().replace(/\s/g, '-') ===
							'normalize-font-style-of-certain-components'
					)
					.scope.push('punctuation.section.embedded.js')

				dataCopy.name = json.name

				dataCopy.semanticClass = json.semanticClass

				let composedTokenColors = dataCopy.tokenColors.concat(json.tokenColors)

				dataCopy.tokenColors = composedTokenColors
			}

			// Write to destination
			writeFileAsync(dest, JSON.stringify(dataCopy, null, '\t'), {
				encoding: 'utf8'
			})
				.then(() => console.log(msg))
				.catch(err => {
					console.error('Could not write to', dest)
					console.error('Additional Info:', err)
				})
		})
		.catch(err => {
			console.error('Could not read', src)
			console.error('Additional Info:', err)
		})
}
