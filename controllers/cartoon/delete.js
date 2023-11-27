const Cartoon = require("../../models/cartoon")

async function destroy(req, res) {
    const id = req.params.id
    await Cartoon.findByIdAndDelete(id)
    res.redirect("/cartoon")
}

module.exports = destroy