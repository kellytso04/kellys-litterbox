const express = require('express');
const axios = require('axios');
// TODO: Import server helpers

const app = express();

// -- Middleware -------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded());


// -- Routes -----------------------------------------------------------------------------
// TODO: Build out all your routes!
app.get('/products', (req, res) => {

});

app.get('/products/:product_id', (req, res) => {

});

app.get('/features/:product_id', (req, res) => {

});

app.get('/styles/:product_id', (req, res) => {

});

app.get('/skus/:product_id', (req, res) => {

});

app.get('/photos/:style_id', (req, res) => {

})

app.get('/related/:product_id', (req, res) => {

});

app.get('/cart', (req, res) => {

});

app.post('/cart', (req, res) => {

});
