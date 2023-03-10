import express from "express";
import dbConnection from "./dbConnection.js";
import router from "./router.js";
import fileUpload from "express-fileupload";

dbConnection();
const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(
  fileUpload({
    limits: {},
  })
);

console.log("started");

app.use("/api", router);

app.listen(3005, () => console.log("listening"));
