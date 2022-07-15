const express = require('express');
const router = express.Router();
const {
  listProducts,
  removeProduct,
  addProduct,
} = require('../model/products');

router.get('/', async (req, res, next) => {
  try {
    const products = await listProducts();
    res.json({
      status: 'success',
      code: 200,
      data: products,
    });
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (req.body.title && req.body.img && req.body.price && req.body.shop) {
      const product = await addProduct(req.body);
      res.json({
        status: 'success',
        code: 201,
        data: product,
      });
    } else {
      res.json({
        status: 'fail',
        code: 400,
        message: 'Invalid product',
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete('/:productId', async (req, res, next) => {
  try {
    const productToDelete = await removeProduct(req.params.contactId);
    if (productToDelete) {
      res.json({
        code: 200,
        message: 'product deleted',
      });
    } else {
      res.json({
        code: 404,
        message: 'Not found',
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
