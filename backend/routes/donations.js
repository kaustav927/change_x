const router =require ('express').Router();
let Donation =require('../models/donation.model');


router.route('/').get((req,res)=>{
    Donation.find()
        .then(donations => res.json(donations))
        .then(err=> res.status(400).json('Error: ' + err));
});


router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description =req.body.description;
    const amount =Number(req.body.amount);
    const date=Date.parse(req.body.date);



  const newDonation = new Donation({
      username,
      description,
      amount,
      date,
  });

  newDonation.save()
    .then(()=> res.json('Donation Added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
});


module.exports =router;