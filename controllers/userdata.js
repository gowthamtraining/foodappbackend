const usermodels = require("../modals/usermodels")
const bcrypt = require("bcryptjs")

const userdata = async (req, res) => {
    try {
        const id = req.body.id
        const userdata = await usermodels.findById({ _id: id })
        if (!userdata) {
            return res.status(400).send({
                sucess: false,
                message: "user not found"
            })
        }
        userdata.password = undefined
        res.status(200).send({
            sucess: true,
            message: "user data",
            userdata
        })
    } catch (error) {
        res.status(500).send({
            sucess: false,
            message: error
        })
    }
}

const updateuser = async (req, res) => {
    try {
        const id = req.body.id
        const userdata = await usermodels.findById({ _id: id })
        const { username, phone } = req.body
        if (phone) userdata.phone = phone
        if (username) userdata.username = username

        await userdata.save()
        res.status(200).send({
            sucess: true,
            message: "data updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            message: error
        })
    }
}

const updatepassword = async (req, res) => {
    try {
        const { oldpassword, newpassword } = req.body
        if (!oldpassword || !newpassword) {
            return res.status(400).send({
                sucess: false,
                message: "fields Invalid"
            })
        }
        const user = await usermodels.findById({ _id: req.body.id })
        if (!user) {
            return res.status(400).send({
                suscess: false,
                message: "user not found"
            })
        }
        const ismatch = await bcrypt.compare(oldpassword, user.password)
        if (!ismatch) {
            res.status(400).send({
                sucess: false,
                message: "Wrong Credentials"
            })
        }
        const hashedpassword = await bcrypt.hash(newpassword, 10)
        user.password = hashedpassword
        user.save()
        res.status(200).send({
            sucess: true,
            messgae: "password Updated"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const resetpassword = async (req, res) => {
    try {
        const { newpassword, answer, email } = req.body
        if (!newpassword || !answer || !email) {
            return res.status(400).send({
                sucess: false,
                message: "field is invalid"
            })
        }
        const user = await usermodels.findOne({ email, answer })
        if (!user) {
            return res.status(400).send({
                sucess: false,
                message: "User Not Found"
            })
        }
        const hashedpassword = await bcrypt.hash(newpassword, 10)
        user.password = hashedpassword
        await user.save()
        res.status(200).send({
            sucess: true,
            message: "password Reset Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}

const userdelete = async (req, res) => {
    try {
        const user = await usermodels.findByIdAndDelete({ _id: req.body.id })
        if (!user) {
            return res.status(400).send({
                sucess: false,
                message: "user Not Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "user deleted sucessfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}


module.exports = { userdata, updateuser, updatepassword, resetpassword, userdelete }