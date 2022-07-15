const express = require('express');
const router = express.Router();
const { listShops, removeShop, addShop } = require('../model/shops');

router.get('/', async (req, res, next) => {
  try {
    const shops = await listShops();
    res.json({
      status: 'success',
      code: 200,
      data: shops,
    });
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (req.body.title) {
      const shop = await addShop(req.body);
      res.json({
        status: 'success',
        code: 201,
        data: shop,
      });
    } else {
      res.json({
        status: 'fail',
        code: 400,
        message: 'Shop object is empty',
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete('/:shopId', async (req, res, next) => {
  try {
    const shopToDelete = await removeShop(req.params.shopId);
    if (shopToDelete) {
      res.json({
        code: 200,
        message: 'shop deleted',
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
