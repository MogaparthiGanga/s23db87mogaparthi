const mongoose = require("mongoose")
const gunSchema = mongoose.Schema({
Barrel_metal: String,
Gun_Model: String,
Gun_Serial_Number: Number
})
module.exports = mongoose.model("Gun",
gunSchema)