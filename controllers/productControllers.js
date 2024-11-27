const product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const product = await product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await product.findAll();
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado.' });
    
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado.' });
    
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
