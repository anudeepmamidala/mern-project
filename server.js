const express=require("express");
const app=express();
const connectdb=require("./utils/db");
connectdb();
const home=require("./routes/route");
app.set("view engine","ejs");
app.use(express.json());
app.use("/",home);

app.listen(3000,()=>{
    console.log("App working in 3000 port");
})
