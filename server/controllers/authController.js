import passport from 'passport';

export const loginUser = (req, res) => { 
    console.log(req.body);
    passport.authenticate('user', {
        successRedirect: '/Home', failureRedirect: '/Login', failureFlash: true
    })
}

// // Handle logout
// authRouter.post('/logout', (req, res) => {
//     req.logout()
//     res.redirect('/')
// })