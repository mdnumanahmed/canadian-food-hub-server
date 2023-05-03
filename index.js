const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chef = require('./data/chefData.json')
const recipe = require('./data/recipe.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("Canadian Food Hub now running");
});


app.get("/chef", (req, res) => {
    res.send(chef);
});

app.get("/recipe", (req, res) => {
    res.send(recipe);
});


app.listen(port, () => {
  console.log(`FoodHub server is running on port: ${port}`);
});
