import express from "express";
import { PORT, URI } from "./config/env.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(URI);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
