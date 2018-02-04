// var request = require("././request");
var observableModule = require("data/observable");
var app = require("application");
var device = require("platform").device;
var pageData = new observableModule.Observable();
var time = 0;
var goal = 0;
// These are from a shitty website
var suggestions = ["See a movie at the drive-in", "Walk on the boardwalk and listen to the boards creak under your feet", "Blow bubbles", "Play tag, hopscotch, or one of your favorite childhood games", "Ride a roller coaster", "Play miniature golf", "Win a prize at the fair", "Catch fireflies at night", "Build a sandcastle at the beach", "Eat a whole lobster with your hands", "Pick berries and peaches at a farm", "Buy a Creamsicle from the neighborhood ice cream truck", "Roast marshmallows over a fire and make s’mores", "Make lemonade from scratch", "Eat corn on the cob", "Sip a sweating glass of iced tea", "Eat a slice of watermelon", "Buy fresh produce at the farmers’ market", "Mix up a pitcher of sangria", "Eat a soft-serve vanilla ice cream cone with rainbow sprinkles", "Dig your own clams", "Have a barbecue", "Nap in a hammock", "Have a picnic in the park", "Sit on a porch swing", "Stargaze while lying in the grass", "Watch the sun set from a beach", "Dangle your feet off a dock", "Bring a blanket and lie on the grass at an outdoor concert", "Pick wildflowers", "Swim in a lake", "Rent a bike", "Go fishing", "Go camping", "Play tennis", "Go for a hike", "Go kayaking or canoeing", "Toss a Frisbee", "Collect seashells at the beach", "Take a last-minute road trip", "See a summer blockbuster", "Read a trashy novel", "Walk barefoot in the grass", "Get caught in a summer rainstorm", "Sleep with the windows open", "Make a summer playlist", "Smell freshly-cut grass", "Feel the sun on your back", "Roll up your pant legs and go wading", "Go to a baseball game"];
var frameModule = require("ui/frame");
var topmost = frameModule.topmost;

// Listen for events
app.android.registerBroadcastReceiver(android.content.Intent.ACTION_SCREEN_ON,
  function onReceiveCallback(context, intent) {
    var temptime = new Date().getTime();
    app.android.registerBroadcastReceiver(android.content.Intent.ACTION_SCREEN_OFF,
      function onReceiveCallback(context, intent) {
        time += new Date().getTime() - temptime; // ms
      });
  });

// Get goal
/* request.get("https://exuberant-authority.glitch.me/database?user=" + device.uuid, (err, res, rawData) => {
      const parsedData = JSON.parse(rawData);
      time = parsedData.time;
      goal = parsedData.goal;
})*/

// Time & Goal
function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = pageData;
  pageData.set("time", time);
  pageData.set("goal", goal);
  pageData.set("suggestion", "How's it going?");
  // Get image
  if (parseInt(pageData.get("time")) <= parseInt(pageData.get("goal")) * 0.25) pageData.set("pet", "https://raw.githubusercontent.com/HarshdipD/Doggie/master/Graphics/happydog.gif?token=AP4pMSPFzpVvyUaBu-NuHzvIFKPKDZfeks5agEbuwA%3D%3D");
  else if (parseInt(pageData.get("time")) <= parseInt(pageData.get("goal")) * 0.5) pageData.set("pet", "https://raw.githubusercontent.com/HarshdipD/Doggie/master/Graphics/semi-happy-dog.gif?token=AP4pMdS7J-CncZKyzwyEbI9Xbs1LBhnRks5af7-pwA%3D%3D");
  else if (parseInt(pageData.get("time")) <= parseInt(pageData.get("goal")) * 0.75) pageData.set("pet", "https://raw.githubusercontent.com/HarshdipD/Doggie/master/Graphics/neutral-dog.gif?token=AP4pMcCmAogRkOqZ-Zq_dmKL_7X2fMoCks5af7_CwA%3D%3D");
  else if (parseInt(pageData.get("time")) <= parseInt(pageData.get("goal"))) pageData.set("pet", "https://raw.githubusercontent.com/HarshdipD/Doggie/master/Graphics/semi-sad%3Ddog.gif?token=AP4pMfIrdxzHhiYiw4ahQu3jYhfIoNuXks5af79owA%3D%3D");
  else pageData.set("pet", "https://raw.githubusercontent.com/HarshdipD/Doggie/master/Graphics/sad-dog.gif?token=AP4pMRTwKXmEYj1Jbhhz1OtgX44hQjhWks5af7_pwA%3D%3D");
}
exports.pageLoaded = pageLoaded;

// Sets up goal
exports.signin = function () {
  // https.post("https://exuberant-authority.glitch.me/database?user=" + device.uuid + "&goal=" + pageData.get('txtKeyword'));
};

// Get suggestion
exports.getsuggest = function () {
  pageData.set("suggestion", suggestions[Math.round(Math.random() * suggestions.length)]);
}

exports.settings = function () {
  topmost().navigate("home/Settings");
}
