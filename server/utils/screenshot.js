var app = require("node-server-screenshot");

const generateScreenshot = (url, destinationImageName) => {
    app.fromURL(url, destinationImageName, function(err){
        if(err) {
            console.log(err, "Error occured")
        }
        //an image of google.com has been saved at ./test.png
        console.log("Created image successfully!!!");
    });
}

module.exports = generateScreenshot;
