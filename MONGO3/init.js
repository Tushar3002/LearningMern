const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Adam",
        to: "TJ",
        msg: "send the messages",
        created_at: new Date(),
    },
    {
        from: "TJ",
        to: "Adam",
        msg: "Okay, sending now.",
        created_at: new Date(),
    },
    {
        from: "Sara",
        to: "John",
        msg: "Can we meet tomorrow?",
        created_at: new Date(),
    },
    {
        from: "John",
        to: "Sara",
        msg: "Sure, what time works for you?",
        created_at: new Date(),
    },
    {
        from: "Emily",
        to: "Chris",
        msg: "Check out this link I sent.",
        created_at: new Date(),
    },
    {
        from: "Chris",
        to: "Emily",
        msg: "Got it, looks good.",
        created_at: new Date(),
    },
    {
        from: "Mike",
        to: "Rachel",
        msg: "Are you coming to the meeting?",
        created_at: new Date(),
    },
    {
        from: "Rachel",
        to: "Mike",
        msg: "Yes, I’ll be there in 10.",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);
