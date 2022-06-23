const User = require('../models/userModel');

exports.userLogIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.find({ email })
        if (userExist) {
            if (userExist.password == password) {
                res.send({ ok: true })
            } else {
                res.send({ ok: false })
            }
        } else {
            res.send({ ok: false })
        }
    } catch (error) {
        console.log(error)
        res.send({ ok: false, massage: error })
    }
}

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        console.log(name, email, password, confirmPassword)
        const userExist = await User.findOne({ email })
        if (!userExist) {
            if (password == confirmPassword) {
                const newUser = new User({ name, email, password, role: 'user', cart: { items: [] } })
                await newUser.save();
                res.send({ ok: true })
            } else {
                res.send({ ok: false, massage: 'The password is not the same' })
            }
        } else {
            res.send({ ok: false, massage: 'User already exist' })
        }
    } catch (error) {
        console.log(error)
        res.send({ ok: false, massage: error })
    }
}