import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    image: {type: String, required: true},
    dateTaken: Date
    
}) 

const photoModel = mongoose.model('photoModel', schema);
export default photoModel; 