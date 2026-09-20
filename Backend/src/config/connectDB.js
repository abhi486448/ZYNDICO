const mongoose =  require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.mongoDB_URI)
    .then(()=>{
        console.log("connected to Db")
    })
}

module.exports = connectToDb