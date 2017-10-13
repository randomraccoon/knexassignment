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
  knex('users').orderBy('id')
  .then((responseArr) => {
    res.render('users', {
      users: responseArr
    });
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
      res.sendStatus(400);
    });

});

app.get('/users/:id', (req, res) => {
  knex('users', '*')
    .where('id', req.params.id)
    .limit(1)
    .then((responseArr) => {
      res.render('user', {
        user: responseArr[0]
      });
    });
});

//update
app.post('/users/:id', (req, res)=>{
  knex('users')
    .update(req.body)
    .where('id',req.params.id)
    .then((result) => {
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

app.get('/users/:id/update', (req, res)=>{
  knex('users', '*')
    .where('id', req.params.id)
    .limit(1)
    .then((responseArr) => {
      res.render('user-update', {
        user: responseArr[0]
      });
    });
});

//delete
app.get('/users/:id/delete', (req, res) => {
  knex('users')
    .del()
    .where('id',req.params.id)
    .then((result) => {
      res.redirect('/users');
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
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
