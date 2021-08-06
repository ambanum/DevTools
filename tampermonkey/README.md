# Tampermonkey scripts

In order to use this scripts in Tampermonkey, You need to

- Open Tampermonkey in chrome extensions
- Create a new script
- copy/paste the `// ==UserScript==` section of the wanted script
- add before the `// ==/UserScript==` the path to your own script

Example:
`// @require file:////Users/martin/Workspace/ambanum/DevTools/tampermonkey/cloudwatch.js`

CAUTION:
Do not use ~ in your path

# Troubleshooting

## Tampermonkey: couldn't load @require from URL

Go to [extension](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo) settings

Check `Allow access to file URLs`
