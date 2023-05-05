const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");
const recipe = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Canadian Food Hub now running");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  // console.log(recipe);
  const selectedChef = chefData.find(chef => chef.id === +id)
  const recipeByChef = recipe.filter((n) => n.chef_id === +id);
  console.log(recipeByChef);
  res.send({selectedChef, recipeByChef});
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipe.find((r) => r.id === +id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`FoodHub server is running on port: ${port}`);
});
