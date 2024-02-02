const usermodels = require("../modals/usermodels")

module.exports = async (req, res, next) => {
    try {
        const user = await usermodels.findById(req.body.id);
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "User not found"
            });
        }

        console.log(user, "user");

        if (user.usertype !== "admin") {
            return res.status(400).send({
                success: false,
                message: "You are not an admin"
            });
        } else {
            // Call next() to proceed to the next middleware or route handler
            next();
        }

    } catch (error) {
        res.status(401).send({
            sucess: false,
            message: "Only Admin Can Acess"
        })
    }
}