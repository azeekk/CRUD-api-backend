const express = require('express')
const Product = require('./models/product.model')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());



app.get('/',(req,res) => {
    res.send("Hello from Node API Server Updated set")
});

app.get('/api/products', async(req,res) =>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

app.post('/api/products', async(req,res) => {
  try {
    const products = await Product.create(req.body)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message : error.message})
  }
})

// get one product with id

app.get('/api/product/:id',async (req,res) => {

  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message : ErrorEvent.message})
  }

})

// update a Product 
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body here if needed (optional)

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,           // Return the updated document
      runValidators: true  // Run schema validators on update
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});


mongoose.connect('mongodb+srv://azeekkalathil99:vyngdn6rD66MywHY@node.9ccmcm2.mongodb.net/?retryWrites=true&w=majority&appName=NODE').then
  (() => {
    console.log('Connected!')
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
})
  .catch(() => {
    console.log("Connection failed");
  })








