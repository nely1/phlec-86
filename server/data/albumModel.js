import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    name: {type: String, required: true},
    score: Number,
    description: String,
    photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'photoModel'}],
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'photoModel'},
    labels: [{type: mongoose.Schema.Types.ObjectId, ref: 'labelModel'}]
    
}) 

const albumModel = mongoose.model('albumModel', schema) 
export default albumModel 