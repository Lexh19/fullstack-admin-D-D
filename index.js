import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });