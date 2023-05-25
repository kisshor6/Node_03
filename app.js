const express = require('express');
const path = require('path');
const hbs = require('hbs');
require("./conn");
const User = require('./schema');
const app = express();

const static_path = path.join(__dirname, "./public/");
const partial_path = path.join(__dirname, "./templates");
const port = process.env.PORT || 3000;


app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}));
app.set("view engine", "hbs");
hbs.registerPartials(partial_path);


app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/services", (req, res)=>{
    res.render("services");
})

app.get("/report", (req, res)=>{
    res.render("report");
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})

app.post("/contact", async(req, res)=>{
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running in port no ${port}`);
})