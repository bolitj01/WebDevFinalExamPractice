import express, { json } from 'express';
import cors from "cors";
import { MongoClient } from 'mongodb';

const app = express();

const dbURL = "mongodb+srv://chester_the_tester:pfwcs@pfw-cs.ctovaum.mongodb.net/?retryWrites=true&w=majority"; //Make sure your DB is available to any IP just like HW5.
const client = await MongoClient.connect(dbURL, { useUnifiedTopology: true });
//Use a database named "final"
const db = client.db("final");
//Use a collection named "animals"
const animals = db.collection("animals");

app.use(cors());
app.use(express.json());

//upload route
app.post("/upload", (req, res) => {
  animals.insertOne({name: req.body.name, picture: req.body.picture});
  res.send("Animal uploaded!");
})

//search route
app.get("/search", async (req, res) => {
  const animal = await animals.findOne({name: req.query.name});
  if (animal){
    res.send(animal.picture);
  }
  else{
    res.status(404).send("Animal not found.");
  }
})

//clear route
app.delete("/clear", (req, res) => {
  animals.deleteMany({});
  res.send("All animals deleted.")
})

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//npm run dev to start React app and Express server