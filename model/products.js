const Product = require('../schemas/products');

const listProducts = async () => {
  const products = await Product.find();
  return products;
};

const removeProduct = async productId => {
  try {
    const product = await Product.findByIdAndRemove({
      _id: productId,
    });
    return product;
  } catch {
    return null;
  }
};

const addProduct = async body => {
  try {
    const response = await Product.create({ ...body });
    return response;
  } catch {
    return {};
  }
};

module.exports = {
  listProducts,
  removeProduct,
  addProduct,
};
