const mongoose = require("mongoose")

require("dotenv").config()

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Ze Bluetoof device is connected succesfully")
    })
        .catch((e) => {
            console.log(e.message + "not successful")
            process.exit(1)
        })
}

module.exports = connectWithDb