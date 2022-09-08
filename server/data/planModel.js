import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    tripName: {type: String, required: true},
    scheduledDate: Date,
    locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'locationModel'}]
    // if there is a problem with querying add user id
}) 

const planModel = mongoose.model('planModel', schema); 
export default planModel; 