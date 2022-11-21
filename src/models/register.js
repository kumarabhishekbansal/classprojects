// Mongoose provides a straight-forward, schema-based solution to model your application data. 
// It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
const mongoose=require("mongoose");

// A Mongoose schema defines the structure of the document, default values, validators, etc.,

const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },    
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },    
    confirmpassword:{
        type:String,
        required:true,
    }
})
// Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

const Register=new  mongoose.model("Register",employeeSchema);
// The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. 
// The module is a variable that represents the current module, and exports is an object that will be exposed as a module. 
// So, whatever you assign to module.exports will be exposed as a module.

module.exports=Register;