const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set name for product'],
    },
    img: {
      type: String,
      required: [true, 'Set image url for product'],
    },
    price: {
      type: Number,
      required: [true, 'Set price for product'],
    },
    shop: {
      type: String,
      required: [true, 'Set shop for product'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Product = mongoose.model('products', productSchema);

module.exports = Product;
