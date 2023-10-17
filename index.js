const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://practiceboy:<password>@cluster0.sjim42x.mongodb.net/?retryWrites=true&w=majority");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// mongodb+srv://practiceboy:<password>@cluster0.sjim42x.mongodb.net/?retryWrites=true&w=majority

const kittySchema = new mongoose.Schema({
    name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence" });
console.log(silence.name); // 'Silence'
