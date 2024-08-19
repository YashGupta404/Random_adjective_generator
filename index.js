import express from "express";
import bodyParser from "body-parser";
import { uniqueNamesGenerator, adjectives } from "unique-names-generator";

const app = express();
const port = 3000;

app.use(express.static("public")); // Very imp line to start all the static files.

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const config = {
    dictionaries: [adjectives],
  };

  const characterName = uniqueNamesGenerator(config);
  res.render("index.ejs", { randomname: characterName });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
