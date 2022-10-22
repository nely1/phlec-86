import mongoose from "mongoose";
import album from "../data/albumModel.js";

const display = async (req, res) => {
  try {
    const userId = req.params.id;
    const albums = await album.find({ userid: userId }).sort({ date: 1 });
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

const updateAlbum = async (req, res) => {
  const changes = req.body;
  const albumId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(albumId))
    return res.status(404).send("No album with that id");
  const updatedAlbum = await album.findByIdAndUpdate(albumId, changes, {
    new: true,
  });
  res.json(updatedAlbum);
};

const deleteAlbum = async (req, res) => {
  const albumId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(albumId))
    return res.status(404).send("No album with that id");

  await album.findByIdAndRemove(albumId);

  res.json({ message: "Album deleted successfully" });
};
export default { display, displayOne, updateAlbum, deleteAlbum };
