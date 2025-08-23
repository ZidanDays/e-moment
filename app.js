import express from 'express';
import Product from './models/Product.js';
import sequelize from './db.js';

const app = express();
app.use(express.json());

//CREATE : Menambahkan produk baru
app.post('/product', async (req,res) => {
    try {
      const { name, price } = req.body;
      const product = await Product.create({ name,price });
      res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message : 'Error creating product', error });
    }
});

//Read
// READ: Mendapatkan semua produk
app.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// READ by ID: Mendapatkan produk berdasarkan ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

// UPDATE: Memperbarui produk
app.put('/products/:id', async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (product) {
      product.name = name;
      product.price = price;
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// DELETE: Menghapus produk
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

// sync sequelize models with database
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server Running on http://localhost:3000');
    });
});