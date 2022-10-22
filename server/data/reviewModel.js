import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    description: String,
    dateUploaded: Date,
    locationId: {type: mongoose.Schema.Types.ObjectId, ref: 'locationModel'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'usermodel'},
}) 

const reviewModel = mongoose.model('reviewModel', schema);
export default reviewModel;
