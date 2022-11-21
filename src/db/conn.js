const mongoose=require("mongoose");
const url="mongodb://localhost:27017/userregister";

// mongoose connect is a method in mongoose lobrary which helps to connect with our mongo db database and it returns a promise
// and to handle with that promise we use try and catch block

mongoose.connect(url,{
    
}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})