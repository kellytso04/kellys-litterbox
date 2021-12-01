const express = require('express');
const axios = require('axios');
const { getAllProducts, getProduct } = require('./models/productModel.js');
const { getProductFeatures } = require('./models/featureModel.js');
const { getProductStyles } = require('./models/stylesModel.js');
const { getSkus } = require('./models/skusModel.js');
const { getStylePhotos } = require('./models/photosModel.js');
const { getRelatedProducts } = require('./models/relatedModel.js');
const { viewCart, addToCart } = require('./models/cartModel.js');

const app = express();

// -- Middleware -------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// -- Routes -----------------------------------------------------------------------------
app.get('/products', (req, res) => {
  getAllProducts()
    .then( (products) => {
      res.status(200).send(products);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending products in server/index.js');
    })
});

app.get('/products/:product_id', (req, res) => {
  getProduct(req.params.product_id)
    .then( (product) => {
      res.status(200).send(product);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending product in server/index.js');
    });
});

app.get('/features/:product_id', (req, res) => {
  getProductFeatures(req.params.product_id)
    .then( (features) => {
      res.status(200).send(features);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending features in server/index.js');
    });
});

app.get('/styles/:product_id', (req, res) => {
  getProductStyles(req.params.product_id)
    .then( (styles) => {
      res.status(200).send(styles);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending styles in server/index.js');
    })
});

app.get('/skus/:style_id', (req, res) => {
  getSkus(req.body.style_id)
    .then( (skus) => {
      res.status(200).send(skus);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending skus in server/index.js');
    })
});

app.get('/photos/:style_id', (req, res) => {
  getStylePhotos(req.body.style_id)
    .then( (photos) => {
      res.status(200).send(photos);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending photos in server/index.js');
    });
})

app.get('/related/:product_id', (req, res) => {
  getRelatedProducts(req.params.product_id)
    .then( (relatedProducts) => {
      res.status(200).send(relatedProducts);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending related products in server/index.js');
    });
});

app.get('/cart', (req, res) => {
  viewCart()
    .then( (cartItems) => {
      res.status(200).send(cartItems);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error sending cart items in server/index.js');
    });
});

app.post('/cart', (req, res) => {
  // NOTE Item should be in the following format:
  // {id, name, sku_id, size, price, count}
  console.log('req body: ', req.body);
  addToCart(req.body.item)
    .then( () => {
      console.log(`Successfully added ${item} to cart`);
      res.sendStatus(200);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error adding item to cart in server/index.js');
    });
});

// ------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log('Listening on port 3000! 🐠');
});
