const router = require('express').Router();
let Users = require('../models/user.model');

router.route('/').post((req, res) => {
  const mCode = req.body.mCode;
  const mNo = req.body.mNo;
  Users.find({$and: [{mobileCode: mCode}, {mobileNo: mNo}]})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  const ID = req.params.id;
  Users.find({_id : ID})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const experience = req.body.experience;
  const country = req.body.country;
  const state = req.body.state;
  const cityVillage = req.body.cityVillage;
  const streetName = req.body.streetName;
  const password = req.body.password;
  const mobileNo = req.body.mobileNo;
  const mobileCode = req.body.mobileCode;

  const newUser = new Users(
    {
      name,
      experience,    
      country,
      state,
      cityVillage,
      streetName,
      password,
      mobileNo,
      mobileCode,
    });

  newUser.save()
    .then(() => {res.json('User added!').send(newUser)})
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;