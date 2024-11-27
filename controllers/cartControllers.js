const cart = require('../models/cart');

exports.addToCart = async (req, res) => {
  try {
    const cart = await cart.findOne({ where: { userId: req.body.userId } });
    if (cart) {
    } else {
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
};

exports.getCartItems = async (req, res) => {
};
