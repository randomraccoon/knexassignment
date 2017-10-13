const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 8000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  knex('users').then((response)=>{
    res.render('users', {users: response});
  });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  knex('users')
    .insert(req.body, '*')
    .then((result) => {
      res.redirect('/users');
    })
    .catch((err) => {
      console.error(err);
      // res.sendStatus(400);
    });

});

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', (req, res) => {
  res.sendStatus(418);
});

app.listen(port, function() {
  console.log("I'm up! I'm up!", port);
});
