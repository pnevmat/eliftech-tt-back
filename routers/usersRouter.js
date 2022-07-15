const express = require('express');
const router = express.Router();
const { listUser, removeUser, addUser } = require('../model/users');

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await listUser(req.params.userId);
    res.json({
      status: 'success',
      code: 200,
      data: user,
    });
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (
      req.body.name &&
      req.body.email &&
      req.body.phone &&
      req.body.address &&
      req.body.orders
    ) {
      const user = await addUser(req.body);
      res.json({
        status: 'success',
        code: 201,
        data: user,
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

router.delete('/:userId', async (req, res, next) => {
  try {
    const productToDelete = await removeUser(req.params.userId);
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
