const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const userRoutes = require("./routes/UserRoutes")
const postRoutes = require("./routes/PostRoutes")

const app = express()
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: false}))
app.use(cors({credentials: true, origin: "http://localhost:5000"}))

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.get("/", function(req, res){
    res.json("This is a fullstack mern Blog")
})


mongoose.connect(process.env.MONGO_URI)
    .then(function(){
        console.log("Connected to the database")
    })
    .catch(function(){
        console.log("Failed to connect to the database")
    })

app.listen(process.env.PORT, function(){
    console.log("Connected to the backend")
})