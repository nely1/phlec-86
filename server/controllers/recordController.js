import album from '../data/albumModel.js';
import label from '../data/labelModel.js';
import photo from '../data/photoModel.js';

const display = async (req, res) => {

    const labels = await label.find({},{}).lean();
    const photo = await photo.find({}, {}).lean();

}

export default {display };