// var https = require("https");
var observableModule = require("data/observable");
var device = require("platform").device;
var pageData = new observableModule.Observable();
var goal = 0;
// These are from a shitty website

// Get goal
/*https.get("https://exuberant-authority.glitch.me/database?user=" + device.uuid, res => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
            goal = parsedData.goal;
        } catch (e) {
            console.error(e.message);
        }
    });
})*/

//  Goal
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = pageData;
    pageData.set("goal", goal);
}
exports.pageLoaded = pageLoaded;

// Slider
exports.onSliderValueChange = function () {
    // https.post("https://exuberant-authority.glitch.me/database?user=" + device.uuid + "&goal=" + pageData.get("goal"));
}