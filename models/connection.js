const dotenv = require("dotenv")
const mongoose = require("mongoose")

// import .env variables
dotenv.config()



// save the database url variable into it's own variable
const DATABASE_URL = process.env.DATABASE_URL

// connect to our database
mongoose.connect(DATABASE_URL)

// connection messages
mongoose.connection.on("open", () => console.log("Connected to mongoose"))
mongoose.connection.on("close", () => console.log("Disconnected from mongoose"))
mongoose.connection.on("error", (error) => console.log(error))

// export already connected to file
module.exports = mongoose















