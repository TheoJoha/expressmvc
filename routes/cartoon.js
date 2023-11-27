const Router = require("express").Router
const controller = require("../controllers/cartoon")

const router = Router()

// my routes


// index
router.get("/", controller.index)

// new
router.get("/new", controller.new)

// destroy
router.delete("/:id", controller.destroy)

// update
router.put("/:id", controller.update)

// create
router.post("/", controller.create)

// edit -- should maybe be put???
router.get("/:id/edit", controller.edit)

// show
router.get("/:id", controller.show)


module.exports = router












