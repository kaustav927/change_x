const mongoose= require('mongoose');

const Scheme=mongoose.Schema;

const donationSchema = new mongoose.Schema({
    username:{ type: String },
    description: {type: String, required: true},
    amount:{type: Number, required: true},
    date:{type:Date, required:true},
}, {
    timestamps:true,
})



const Donation=mongoose.model('Donation', donationSchema);
module.exports=Donation;