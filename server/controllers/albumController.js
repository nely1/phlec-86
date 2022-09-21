import album from "../data/albumModel.js";

const display = async (req, res) => {
    try {
        const albums = await album.find();
        res.status(200).json(albums);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default { display };
