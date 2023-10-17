const mongoose = require("mongoose");

// schema
const kittySchema = new mongoose.Schema({
    name: String,
});

// model
const Kitten = mongoose.model("Kitten", kittySchema);

// export
module.exports = Kitten;
// module.exports.Kitten = Kitten;
