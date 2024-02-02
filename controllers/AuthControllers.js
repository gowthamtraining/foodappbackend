const usermodels = require("../modals/usermodels")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userregister = async (req, res) => {
    try {
        const { username, phone, email, address, password, answer } = req.body
        console.log(req.body)
        if (!username || !email || !password || !address || !phone || !answer) {
            return res.status(500).send({
                sucess: false,
                message: "Field Where Missing"
            })
        }
        const existinguser = await usermodels.findOne({ email })
        if (existinguser) {
            return res.status(500).send({
                sucess: false,
                message: "User Is Already Register"
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const user = await usermodels.create({ username, email, password: hashedpassword, address, phone, answer })
        res.status(201).send({
            sucess: true,
            message: "User Register Is Sucess",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            sucess: false,
            message: { error }
        })
    }
}
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).send({
                sucess: false,
                message: "Fields Where Missing"
            })
        }
        const userfound = await usermodels.findOne({ email })
        if (!userfound) {
            return res.status(400).send({
                sucess: false,
                message: "user not found"
            })
        }
        const passwordcheck = await bcrypt.compare(password, userfound.password)
        if (!passwordcheck) {
            return res.status(500).send({
                sucess: false,
                message: "wrong credentials"
            })
        }
        const token = await jwt.sign({ id: userfound._id }, process.env.SECRET_KEY, {
            expiresIn: "7d"
        })
        userfound.password = undefined
        res.status(200).send({
            sucess: true,
            message: "login sucessfully",
            userfound,
            token

        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: "something Went Wrong",
            error
        })
    }
}
module.exports = { userregister, userlogin }