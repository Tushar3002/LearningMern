const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("connection successful");
    })  
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

const user1 = new User({
    name: "TJ",
    email: "tj@gmail.com",
    age: 33,
});

user1.save();