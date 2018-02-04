var observableModule = require("data/observable");
var device = require("platform").device;
var pageData = new observableModule.Observable();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = pageData;
}

exports.login = function() {
    firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
    );
}
