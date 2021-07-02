# Quick scale

Simple plugin to proportionally scale any selected elements by a set amount. No popup – just choose your scaling factor and voilà. 

Assigning keyboard shortcuts is on you but the individual menu commands make that easy as pie. If you’ve not done this before Apple have [instructions for setting shortcuts on a mac](https://support.apple.com/en-nz/guide/mac-help/mchlp2271/mac).

Why such a basic plugin? Right now Figma pastes retina images at their full pixel dimensions. If (like me) you find yourself scaling these by 50% an awful lot, a keyboard shortcut is a rather handy thing. Ideally the plugin would be called "Paste and scale" but triggering a system paste in a Figma plugin seems tricky or a no-go – contributions welcome!



## Development instructions

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
