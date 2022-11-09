import album from "../data/albumModel.js";

const upload = async (req, res) => {
  const newAlbum = req.body;
  const theAlbum = new album(newAlbum);

  try {
    await theAlbum.save();
    res.status(201).json(theAlbum);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export default { upload };
