import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/activities", routes);

mongoose
  .connect("mongodb://localhost:27017/activity_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => console.log("Database connection error: ", error));

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}...`);
});
