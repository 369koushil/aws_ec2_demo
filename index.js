const express=require("express")
const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(201).json({admin:"this is a aws vm launched by koushil"})
})

app.listen(8080)