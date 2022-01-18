const mongoose = require("mongoose");

const CitySchema =new mongoose.Schema({
    id:Number,
    name:String,
    state:String
})
const City = new mongoose.model("City", CitySchema);
module.exports=City