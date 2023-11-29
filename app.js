//IMPORTATION DES PAQUETS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
require('dotenv/config');


//Middleware
/*app.use('/posts',() => {
*  console.log('Middleware running');
*});*/

app.use(bodyParser.json())
//ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
app.get('/',(req,res) => {
    res.send('We\'re at home');
});
//
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true}, () => console.log('connected to DB')
);
app.listen(3001);