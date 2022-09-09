import album from '../data/albumModel.js';
import label from '../data/labelModel.js';
import photo from '../data/photoModel.js';

const display = async (req, res) => {

    const labels = await label.find({},{}).lean();
    const photo = await photo.find({}, {}).lean();

}


const upload = async (req, res) => {
    const newAlbum = req.body;

    const theAlbum = new album(newAlbum);

    try {
        await theAlbum.save();
        res.status(201).json(theAlbum);
    }
    catch (error) {
        res.status(409).json({message:  error.message});
    }

}
export default {display , upload};