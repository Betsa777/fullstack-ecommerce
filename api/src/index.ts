import express from "express"
const app = express()
const port:number = 3000

app.get("/",(req,res)=>{
    res.send("Hello world 123")
})

app.listen(port,()=>{
    console.log("Example chat on 3000")
})