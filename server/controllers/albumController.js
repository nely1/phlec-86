import album from "../data/albumModel.js";

const display = async (req, res) => {
    try {
        const userId = req.params.id;
        const albums = await album.find({ userid: userId });
        res.status(200).json(albums);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const displayOne = async (req, res) => {
    try {
        const albumId = req.params.id;
        const albumOne = await album.find({ _id: albumId });
        res.status(200).json(albumOne);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default { display, displayOne };
