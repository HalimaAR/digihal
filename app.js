const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("home")
});

app.get('/over', (req, res) => {
  res.render("over")
});
app.get('/diensten', (req, res) => {
  res.render("diensten")
});

app.get('/team', (req, res) => {
  res.render("team")
});

app.get('/contact', (req, res) => {
  res.render("contact")
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});