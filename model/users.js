const User = require('../schemas/users');

const listUser = async userId => {
  const user = await User.find({ _id: userId });
  return user;
};

const removeUser = async shopId => {
  try {
    const user = await User.findByIdAndRemove({
      _id: shopId,
    });
    return user;
  } catch {
    return null;
  }
};

const addUser = async body => {
  try {
    const [user] = await User.find({ name: body.name, phone: body.phone });
    if (user.length !== 0) {
      const updatedUser = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        orders: [...user.orders, ...body.orders],
      };

      const response = await User.findByIdAndUpdate(
        { _id: user._id },
        updatedUser,
      );
      return response;
    }

    const response = await User.create({ ...body });
    return response;
  } catch {
    return {};
  }
};

module.exports = {
  listUser,
  removeUser,
  addUser,
};
