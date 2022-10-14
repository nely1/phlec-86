import User from '../data/userModel.js' ;

const updateUserInfo = async (req, res) => {
    try {
        const userId = req.params.id;
        const newProfile = req.body;
        console.log(userId);
        console.log(newProfile);
        const updatedUser = User.findByIdAndUpdate(userId, newProfile, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default { updateUserInfo };