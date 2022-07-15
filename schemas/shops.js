const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set name for shop'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Shop = mongoose.model('shops', shopSchema);

module.exports = Shop;
