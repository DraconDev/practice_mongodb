const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
    name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence" });
// console.log(silence.name); // 'Silence'

// module.exports = mongoose.model("Kitten", kittySchema);
module.exports.silence = silence;
