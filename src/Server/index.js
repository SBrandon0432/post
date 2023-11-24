const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const schema = require("./Schemas/schema");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
app.use(express.static("/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection =
    "mongodb+srv://sam:VbOw8VQLPXtqkWBO@clusterpost0.zbutcaw.mongodb.net/?retryWrites=true&w=majority";

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

mongoose
    .connect(connection)
    .then(() => {
        app.listen(port, () => {
            console.log("Your app is listening on port " + port);
        });
    })
    .catch((err) => {
        console.log(err, "Something went wrong");
    });
