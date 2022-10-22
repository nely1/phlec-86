import review from "../data/reviewModel.js";

const getReview = async (req, res) => {
  try {
    const reviews = await review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postReview = async (req, res) => {
  try {
    // const albumId = req.params.id;
    // const albumOne = await album.find({ _id: albumId });
    // res.status(200).json(albumOne);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { getReview, postReview };
