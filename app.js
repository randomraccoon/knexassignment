const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.render('index.ejs');
});

app.use('/', (req, res)=>{
  res.sendStatus(418);
});

app.listen(port, function() {
  console.log("I'm up! I'm up!", port);
});
