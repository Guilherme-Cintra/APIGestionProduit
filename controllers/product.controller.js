import Product from "../models/product.model.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
      } catch (error) {
        next(error);
      }
}

export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
          res.status(200).json(product);
        } else { 
          res.status(404).json({ message: 'product not found' });
        }
      } catch (error) {
        next(error);
      }
}

export const createProduct = async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

  
export const updateProduct = async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.update(req.body);
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'product not found' });
      }
    } catch (error) {
      next(error);
    }
  };

  export const deleteProduct = async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.destroy();
        res.status(200).json({ message: 'product deleted' });
      } else {
        res.status(404).json({ message: 'product not found' });
      }
    } catch (error) {
      next(error);
    }
  };