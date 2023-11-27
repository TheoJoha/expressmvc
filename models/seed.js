const Cartoon = require("./cartoon.js")
const mongoose = require("./connection")
const cartoons = require("./seedData")


async function seed() {
    // delete everything in the db
    await Cartoon.deleteMany({})
    // what you want to do
    const createdCartoons = await Cartoon.create(cartoons)
    console.log(createdCartoons.length)
    console.log(createdCartoons[0])

}


// run the seed function when the database connects
mongoose.connection.on("open", () => {seed()})




