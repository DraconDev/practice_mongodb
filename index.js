const mongoose = require("mongoose");
const Kitten = require("./schema");

require("dotenv").config();

// console.log(process.env.USERNAME, process.env.PASSWORD);

async function connectDb() {
    await mongoose.connect(
        `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sjim42x.mongodb.net/?retryWrites=true&w=majority`
    );
}

async function main() {
    await connectDb();
    // creation of a new instance of a model
    const silence = new Kitten({ name: "cake" });
    // save the instance
    try {
        await silence.save();
    } catch (err) {
        console.log(err);
    }
    // find all
    try {
        const result = await Kitten.find({ name: /^cake/ });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

main().catch((err) => console.log(err));
