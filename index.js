import express from "express";
import cors from "cors";
import fs from "fs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8081;

app.use(cors(process.env.CORS_ORIGIN));
app.use(express.static("public"));

app.route("/").get((_req,res)=>{
  const data = JSON.parse(fs.readFileSync("./data/data.json","utf8"))
  res.json(data);
}) 

app.listen(port, () => {
  console.log(`app running on port: http://localhost:${port}`);
});
