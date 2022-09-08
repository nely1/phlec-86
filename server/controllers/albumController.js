import album from '../data/albumModel.js';

const display = async (req, res) => {
    
    const albums = await album.find({}, {}).lean();
}

export default {display };