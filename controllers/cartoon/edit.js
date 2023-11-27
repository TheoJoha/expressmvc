const Cartoon = require("../../models/cartoon")

async function edit(req, res) {
    const id = req.params.id
    const cartoon = await Cartoon.findById(id)
    res.render("cartoons/edit.ejs", {cartoon})
}

module.exports = edit
