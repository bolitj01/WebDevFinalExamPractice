import express, { json } from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const buildFolder = "../dist";

const app = express();

const animalSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  pictureURL: {type: String, required: true}
});

const Animal = mongoose.model("Animal", animalSchema);

const dbURL = "mongodb+srv://final-exam-practice:final-exam-practice@pfw-cs.ctovaum.mongodb.net/final-exam-practice?retryWrites=true&w=majority";
await mongoose.connect(dbURL);
console.log("Connected to database!");

app.use(cors());
app.use(express.json());

//server static React build files
app.use(express.static(path.join(__dirname, buildFolder)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, buildFolder, "index.html"));
});

//upload route
app.post("/animals/upload", async (req, res) => {
  try{
    const newAnimal = new Animal({name: req.body.name, pictureURL: req.body.pictureURL});
    await newAnimal.save();
    const message = `Animal ${req.body.name} uploaded!`
    console.log(message); 
    res.send(message);
  }
  catch (err){
    console.log(err.message);
    res.send(err.message);
  }
})

//search route
app.get("/animals/search", async (req, res) => {
  console.log(req.query.name);
  const animal = await Animal.findOne({name: req.query.name});
  if (animal){
    res.send(animal.pictureURL);
  }
  else{
    res.status(404).send("Animal not found.");
  }
})

//clear route
app.delete("/animals/clear", async (req, res) => {
  await Animal.deleteMany({});
  res.send("All animals deleted.")
})

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//npm run dev to start React app and Express server
//npm run build and npm start to build React app and start Express server