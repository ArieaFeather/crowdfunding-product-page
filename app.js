require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const pledges = require(__dirname + "/public/pledgeOptions.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", {
        pledgeTypes: pledges.pledgeOptions,
    });
});
app.get("/home", (req, res) => {
    res.render("home", {
        pledgeTypes: pledges.pledgeOptions,
    });
});
app.post("/", (req, res) => {
    res.render("thankyou", {
        pledgeTypes: pledges.pledgeOptions,
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log("Quest Started!");
});
