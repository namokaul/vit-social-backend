const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const app = express()

// looking for a database URI to connect with the database if not found then use local database instance
const databaseURI = process.env.DATABASE ? process.env.DATABASE : "mongodb://localhost:27017/vit-social"
// connecting to the database
mongoose.connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}).then(() => {
    console.log("Database connected!")
})


// using middlewares
app.use(cors()) // CORS = Cross-Origin Resource Sharing



// looking for a port in environment variable if not found then use localhost:5000
// start the server on that port
const PORT = process.env.PORT ? process.env.PORT : 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})