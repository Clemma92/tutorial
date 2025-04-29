import express from "express";
import path, { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port, (req,res)=>{
    console.log(`Sono in ascolto alla porta ${port}`);
});