var webshot = require("webshot-node");

const generateScreenshot = (url, destinationImageName) => {
    console.log(url, destinationImageName)
    webshot(url, destinationImageName, function (err) {
        if (err) {
            console.log(err, "Error occured")
        }
        //an image of google.com has been saved at ./test.png
        console.log("Created image successfully!!!");
    });
}

module.exports = generateScreenshot;


// webshot('google.com', 'google.png', function(err) {
//     // screenshot now saved to google.png
//   });