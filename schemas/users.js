const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
    },
    email: {
      type: String,
      required: [true, 'Set email for user'],
    },
    phone: {
      type: String,
      required: [true, 'Set phone for user'],
    },
    address: {
      type: String,
      required: [true, 'Set address for user'],
    },
    orders: {
      type: Array,
      required: [true, 'Set orders for user'],
    },
  },
  { versionKey: false, timestamps: true },
);

const User = mongoose.model('users', userSchema);

module.exports = User;
