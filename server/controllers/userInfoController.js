import User from '../data/userModel.js' ;
import bcrypt from 'bcryptjs';

const updateUserInfo = async (req, res) => {
    try {
        const userId = req.params.id;
        const newProfile = req.body;
        newProfile.password = await bcrypt.hash(newProfile.password, 12);
        console.log(userId);
        console.log(newProfile);
        const updatedUser = await User.findByIdAndUpdate(userId, newProfile, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    return;
}

export default { updateUserInfo };