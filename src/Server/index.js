const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(express.static("/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Your app is listening on port " + port);
});
