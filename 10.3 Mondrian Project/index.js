import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port, (req,res)=>{
    console.log(`Sono in ascolto alla porta ${port}`);
});