var app = require("node-server-screenshot");

const generateScreenshot = (url, destinationImageName) => {
    app.fromURL(url, "../public/screenshots"+destinationImageName+".png", function(){
        //an image of google.com has been saved at ./test.png
    });
}

module.exports = generateScreenshot;
