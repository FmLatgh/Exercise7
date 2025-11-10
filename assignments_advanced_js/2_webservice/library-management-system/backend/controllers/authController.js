// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../utils/validators');
const Book = require("../models/Book");

exports.registerUser = async (req, res, next) => {
    // Validate data
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const { name, email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        const isAdmin = (name === process.env.ADMIN || false);
        console.log("authcontroller: isadmin:",isAdmin)

        user = new User({
            name,
            email,
            password,
            isAdmin
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user
        await user.save();

        // Create and assign token
        const payload = {
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '7d' },
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ token });
            }
        );
    } catch (err) {
        next(err);
    }
};

exports.loginUser = async (req, res, next) => {
    // Validate data
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) return res.status(401).json({ msg: 'Invalid Credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: 'Invalid Credentials' });

        // Create and assign token
        const payload = {
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '7d' },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token, id: user.id });
            }
        );
    } catch (err) {
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {

    try {
        // Check if user exists
        let user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(401).json({ msg: 'Can\'t delete a user that doesn\'t exist.' });

        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ msg: "User has been deleted" });

    } catch (err) {
        next(err);
    }
};
