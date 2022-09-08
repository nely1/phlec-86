import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    name: {type: Number, required: true},
    address: String ,
    overallRating: Number,
    description: String
}) 

const locationModel = mongoose.model('locationModel', schema);
export default locationModel; 