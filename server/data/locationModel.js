import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    theme: String,
    subTheme: String,
    name: String,
    latitude: Number,
    longitude: Number,
    likes: {type: Number, default: 0},
    reviews: [String]
}) 

const locationModel = mongoose.model('locationModel', schema);
export default locationModel; 