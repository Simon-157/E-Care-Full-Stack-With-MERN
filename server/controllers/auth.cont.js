const express = require('express');
const { OAuth2Client } = require("google-auth-library")
const User = require("../models/user.model")
const dotenv = require('dotenv')


dotenv.config();
const googleClient = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID,
);

const authenticateUser = async (req,res) => {
    const {token} = req.body;
    const ticket = await googleClient.verifyIdToken({
        idToken:token,
        audience:process.env.CLIENT_ID ,
    });

    const payload = ticket.getPayload();
    console.log(payload);

    let user = await User.findOne({ email: payload?.email }).exec();
    if (!user) {
        user = await new User({
            email: payload?.email,
            avatar: payload?.picture,
            name: payload?.name
        });

        await user.save();
    }

    res.json({user, token})
};

module.exports = authenticateUser;

