import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const buildFolder = "../dist";
const buildPath = path.join(__dirname, buildFolder);
const indexPath = path.join(buildPath, "index.html");

const dbURL = "mongodb+srv://final-exam-practice:final-exam-practice@pfw-cs.ctovaum.mongodb.net/final-exam-practice?retryWrites=true&w=majority";

const app = express();

//TODO Implement missing structures and functionality
//DB connection, middleware, and API routes

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//npm run dev to start React app and Express server
//npm run prod to build React app and start Express server