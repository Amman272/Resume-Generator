import express from "express";
import cors from "cors"
import formRoutes from "./form.js"
const app=express();
const port=process.env.PORT||3000;

app.use(cors());
app.use (express.json());

app.use("/form",formRoutes);
app.listen(port,()=>{
    console.log("server is running on port",port)
})