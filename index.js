import express from "express";
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening in port http://localhost:${PORT}`);
}

function handleHome(req,res){
    console.log(req);
    res.send("console hello");
}

function handleProfile(req,res){
    res.send("You are on my profile12");
}

app.get("/", handleHome);
app.get("/1", handleProfile);

app.listen(PORT, handleListening);

// responsd with "hello world" when a GET request is made to the homepage
// app.get('/', function(req,res){
//     res.send("hello World")
// })
