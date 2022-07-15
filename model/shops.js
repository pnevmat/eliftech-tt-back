const Shop = require('../schemas/shops');

const listShops = async () => {
  const shops = await Shop.find();
  return shops;
};

const removeShop = async shopId => {
  try {
    const shop = await Shop.findByIdAndRemove({
      _id: shopId,
    });
    return shop;
  } catch {
    return null;
  }
};

const addShop = async body => {
  try {
    const response = await Shop.create({ ...body });
    return response;
  } catch {
    return {};
  }
};

module.exports = {
  listShops,
  removeShop,
  addShop,
};
