import express from "express";
import handlebars from 'express-handlebars';
import  _dirname from "./utils.js";
import router from "./routes/views.router.js";

const app = express(); 
app.engine('handlebars',handlebars.engine());
app.set("views",_dirname + "/views")
app.set("view engine","handlebars")
app.use(express.static(_dirname+ "/public"))

app.use(express.json())
app.use(express.urlencoded({extended:true})) // permite que se pueda enviar información tmbien desde la url

app.use('/',router)

app.listen(8080,()=>{
    console.log("Server is running in port 8080")
})