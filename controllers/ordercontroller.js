const ordersmodel = require("../modals/ordersmodel")

const createorder = async (req, res) => {
    try {
        const { food } = req.body
        if (!food) {
            return res.status(400).send({
                sucess: false,
                message: "Field Invalid"
            })
        }
        let total = 0

        food.map((item) => total += item.price)
        const createorder = await ordersmodel.create({ food, payement: total, buyer: req.body.id })
        if (!createorder) {
            return res.status(400).send({
                sucess: false,
                message: "something error happen"
            })
        }

        res.status(200).send({ sucess: true, message: "order created" })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const updatestatus = async (req, res) => {
    try {
        const { status } = req.body
        if (!status) {
            return res.status(400).send({
                sucess: false,
                message: "Field Invalid"
            })
        }
        const user = await ordersmodel.findByIdAndUpdate(req.params.id, { status }, { new: true })
        if (!user) {
            return res.status(400).send({
                sucess: false,
                message: "some field where missing kindly check"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "status updated"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}

module.exports = { createorder, updatestatus }