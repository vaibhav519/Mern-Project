import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use("/students", studentRoutes)

app.use(bodyParser.json({ limit: "20mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extented: true }));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://vaibhav:12345@cluster0.tiucar2.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`connection established and running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
