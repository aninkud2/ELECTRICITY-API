import express from "express"
import router from "./router/router.js"
const port =2345
const app=express()
app.use(express.json())
app.use("/",router)
app.listen(port,()=>{
    console.log("listening to port:"+port)
})