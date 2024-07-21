const express = require('express')


const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 4000
// const bodyParser=require("body-parser")
app.use(express.json())

const blog = require("./routes/blog")

app.use("/api/v1", blog)

const connectWithDb = require("./config/database")
connectWithDb();

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})

app.get("/", (req, res) => {
    res.send(`<h1>This is home pages</h1>`)
})