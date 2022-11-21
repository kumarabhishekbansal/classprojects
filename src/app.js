// Express Allows to set up middlewares to respond to HTTP Requests .
const express=require("express");
// Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.
const hbs=require("hbs");
const app=express();
// This is the minimum needed to connect the myapp database running locally on the default port (27017).
require("./db/conn");
// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
//  built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({extended:false}));
const Register=require("./models/register");
const port= 5000;
// The Path module provides a way of working with directories and file paths.
const path=require("path");
// The path.join() method joins the specified path segments into one path.
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../src/templates/views");
const partials_path=path.join(__dirname,"../src/templates/partials");
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// The app.use() function is used to mount the specified middleware function
// The middleware function is executed when the base of the requested path matches the path.
app.use(express.static(static_path));
// The app.set() function is used to assigns the setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.
app.set("view engine","hbs");
app.set("views",template_path);
// registerPartials provides a quick way to load all partials from a specific directory
hbs.registerPartials(partials_path);
// app.get(): This function tells the server what to do when get requests at a given route.
// The res. render() function is used to render a view and sends the rendered HTML string to the client.
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/register",(req,res)=>{
    res.render("register");
})
// The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions.

app.post("/register",async(req,res)=>{
    // console.log("enter");
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword)
        {
            const registeremployee=new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const registered=await registeremployee.save();
            // if(registered)
            // {
            //     console.log("success");
            // }else{
            //     console.log("failed");
            // }
            res.status(201).render("index");
        }else{
            res.status(400).send("error passwords are not matching");
        }
    }catch(err)
    {
        // res.status(400).json({"message":"some error while filling the data"});
        // console.log(err);
        res.status(400).render("error");
    }
})
// The app.listen() function is used to bind and listen the connections on the specified host and port
app.listen(port,()=>{
        console.log("server is established");
});