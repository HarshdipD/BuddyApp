var observableModule = require("data/observable");
var device = require("platform").device;
var firebase = require("nativescript-plugin-firebase");
var pageData = new observableModule.Observable();
var frameModule = require("ui/frame");
var topmost = frameModule.topmost;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = pageData;
    firebase.init({});
}

exports.login = function() {
    /*firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
    );*/
      topmost().navigate("home/home-page");
}
