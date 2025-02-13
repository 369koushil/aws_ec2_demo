const expres=require("express")
const app=express();

app.use(expres.json())

app.get("/kkr",(req,res)=>{
    return res.status(201).json({admin:"this is a aws vm launched by koushil"})
})

app.listen(3000)