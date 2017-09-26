# Contributing to this Project

Hey! Feelin' geeky? Juicy! You'll get started in a bit :smirk:.

> Before getting started, I'd say that the **VS Code** [theme color reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) is a really useful resource to check out.

1. Fork this repo
2. Open the forked repo in your terminal and run `npm install`
3. Start to watch for changes with `npm start` - this runs a nodemon task and will automatically recompile any changes you make
4. Open the repo in **VS Code**
5. Launch your command palette <kbd>Ctrl/Cmd+Shift+P</kbd> and type **VSIX**. Select the one that says **Extensions: Install from VSIX...**
6. Load the **VSIX** file you created a few steps back
7. Set your editor to use this theme - change the name in `package.json` to something like "Material Palenight Dev" so you can differentiate from the initial theme you installed.
8. Go to the debug sidebar `View → Debug`
9. Hit the green arrow beside "Launch Extension" - opens a new window
10. Make a change, and then hit the refresh button on your debug toolbar - this is in your first editor - not the one that popped open.
11. Wait a sec, your changes should now be reflected!
12. Duplicate your changes in the other **variants**
13. Commit your changes to your **fork** of this repo
14. Send a **PR** that contains detailed information about your change
15. I'll review it, and decide whether it should be merged :book:.
16. Voila! You're done :wink:.

## Things You might want to help with

- [] Automate copying every change in a JSON file into the **variants**. Say, you edit *material-palenight-theme.json*, your changes should get duplicated in *material-palenight-theme-italic.json* and *material-palenight-theme-operator.json*.
- [] Create a functionality that'll group the code for each language in separate files. Say, *javascript.json*, *css.json* and would automtically be merged into one file on build.
- [] Create a variant for users with eye issues.
- [] Help out with updating the [Atom version](https://github.com/whizkydee/atom-material-palenight-syntax).
- [] Support this project. Get me coffee :wink:!

Thanks for showing interest and helping out :ok_hand:!

If you get stuck somewhere, reach out to me on [Twitter](https://twitter.com/mrolaolu) :smile:.
