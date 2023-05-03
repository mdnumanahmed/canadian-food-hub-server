const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chef = require('./data/chefData.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("Canadian Food Hub now running");
});


app.get("/chef", (req, res) => {
    res.send(chef);
});

app.get("/categories/:id", (req, res) => {
    const id = req.params.id;
    if (+id === 0) {
      res.send(news);
    } else {
      const categorizedNews = news.filter((n) => n.category_id === id);
      res.send(categorizedNews);
    }
});
  
app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});


app.listen(port, () => {
  console.log(`FoodHub server is running on port: ${port}`);
});
