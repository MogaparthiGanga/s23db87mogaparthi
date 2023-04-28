const mongoose = require("mongoose")
const gunSchema = mongoose.Schema({
Barrel_metal: String,
Gun_Model: {
    type:String,
    required:true,
    match:/^[a-zA-Z]+$/
},
Gun_Serial_Number: {
    type:Number,
    min:1,
    max:1000
}
})
module.exports = mongoose.model("gun",
gunSchema)