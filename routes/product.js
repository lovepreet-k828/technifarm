const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').post((req, res) => {
  const Category = req.body.category;
  Product.find({category : Category})
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.find({ownerId : req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const variety = req.body.variety;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const category = req.body.category;
  const ownerId = req.body.ownerId;

  const newProduct = new Product(
    {
      name,
      variety,
      quantity,
      price,
      category,
      ownerId
    });

  newProduct.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;