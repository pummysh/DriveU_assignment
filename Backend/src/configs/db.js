const mongoose = require('mongoose');

module.exports =()=>{
    return mongoose.connect("mongodb+srv://pummy:9602676356@cluster0.imwqp.mongodb.net/puncture");
}