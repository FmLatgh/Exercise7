// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require("../models/User");

module.exports = function (req, res, next) {

    try {
        // Check if user is an admin
        User.findOne({ _id: req.user.id })
            .then(
                (user)=>{
                    if (!user?.isAdmin) return res.status(400).json({ msg: 'Invalid action for this user' });
                    next();
                },
                ()=>res.status(400).json({msg: 'User doesn\'t exist'})
            )
    } catch (err) {
        res.status(401).json({ msg: '' + err });
    }
};

