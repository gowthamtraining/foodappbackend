const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
            if (error) {
                res.status(400).send({
                    sucess: false,
                    message: error
                })
            }
            else {
                req.body.id = decode.id
                next()
            }
        })
    } catch (error) {
        res.status(401).send({
            sucess: false,
            message: "Token Expries Or Invalid"
        })
    }
}