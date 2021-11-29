const express = require('express');
const axios = require('axios');
// TODO: Import server helpers
const { getAllProducts, getProduct } = require('./models/productModel.js');

const app = express();

// -- Middleware -------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// -- Routes -----------------------------------------------------------------------------
// TODO: Build out all your routes!
app.get('/products', (req, res) => {
  getAllProducts()
    .then( (products) => {
      res.status(200).send(products);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error getting products in server/index.js');
    })
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


// ------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log('Listening on port 3000! 🐠');
});
