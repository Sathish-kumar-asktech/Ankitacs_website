const user = require("../Data/Login");
const jwt = require("jsonwebtoken");

const Getallusers = async(req, res, next) => {
    try {
        const userdata = await user.Getallusers();
        res.send(userdata);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const userlogin = async(req, res, next) => {
    try {
        const userdata = req.body;

        const getlogin = await user.userlogin(userdata);

        if (getlogin.length != 0) {
            jwt.sign({ getlogin }, "secretkey", (err, token) => {
                res.json({ getlogin, token });
            });
        } else {
            res.json({ getlogin });
        }
        //console.log(getlogin)

        // res.send(getlogin)
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const EmailOnEnquiry = async (req, res, next) => {
    try {
        const mailData = req.body;
        const getlogin = await user.EmailOnEnquiry(mailData);

        if (getlogin.length !== 0) {
            res.json({ getlogin });
        } else {
            res.json({ getlogin });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


module.exports = {
    Getallusers: Getallusers,
    userlogin: userlogin,
    EmailOnEnquiry,
};