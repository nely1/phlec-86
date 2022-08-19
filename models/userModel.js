const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_picture: String,
    role: {type:String, required:true}, 
    //patients: [{type: mongoose.Schema.Types.ObjectId, ref: 'patientModel'}]   
    //theme:
}) 

const userModel = mongoose.model('userModel', schema) 
module.exports = userModel 

/*

Security features using bycrypt: <<Could consider local vs other types of passport>>

// Code from Web Information Technologies INFO30005

const bcrypt = require('bcryptjs')

schema.methods.verifyPassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, valid) => {
        callback(err, valid)
    })
}

// Password salt factor
const SALT_FACTOR = 10
// Hash password before saving
schema.pre('save', function save(next) {
    const user = this
    // Go to next if password field has not been modified
    if (!user.isModified('password')) {
        return next()
    }
    // Automatically generate salt, and calculate hash
    bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
        if (err) {
            return next(err)
        }
        // Replace password with hash
        user.password = hash
        next()
    })
})

 */