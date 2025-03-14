import express from "express"
import productRoutes from "./routes/products/index"
const app = express()
const port:number = 3000

app.get("/",(req,res)=>{
    res.send("Hello world 123")
})

app.use('/products',productRoutes)

app.listen(port,()=>{
    console.log("Example chat on 3000")
})