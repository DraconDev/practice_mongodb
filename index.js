const mongoose = require("mongoose");
const { silence } = require("./schema.js");

require("dotenv").config();

main().catch((err) => console.log(err));

console.log(process.env.USERNAME, process.env.PASSWORD);

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sjim42x.mongodb.net/?retryWrites=true&w=majority`
    );
    // const Kitten = mongoose.model("Kitten", kittySchema);
    await silence.save();
}
