import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //Any needed hooks
  const [result, setResult] = useState("")
  const [image, setImage] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setResult("");
    }, 3000)
  }, [result]);
  
  //Functions for API
  //upload
  async function upload(e){
    e.preventDefault();

    const res = await fetch("/animals/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        pictureURL: e.target.picture.value
      })
    });

    if (res.status == 200){
      const result = await res.text();
      setResult(result);
    }
  }

  //search
  async function search(e){
    e.preventDefault();

    const res = await fetch(`/animals/search?name=${e.target.name.value}`);

    if (res.status == 200){
      const URL = await res.text();
      setImage(URL);
    }
    else {
      const result = await res.text();
      setResult(result);
      setImage(null);
    }
  }

  //clear
  async function clear(e){

    const res = await fetch(`/animals/clear`, {
      method: "DELETE"
    });

    if (res.status == 200){
      const result = await res.text();
      setResult(result);
    }

    setImage(null);
  }

  return (
    <div className="App">
      <h1>Animal Collection</h1>
      <h3>Add Animal</h3>
      <form onSubmit={upload}>
        <label htmlFor="name">Animal:</label>
        <input type="text" name="name" id="name" placeholder='Name'/>
        <label htmlFor="picture">Picture Address:</label>
        <input type="text" name="picture" id="picture"/>
        <button type='submit'>Upload</button>
      </form>

      <h3>Search Animal</h3>
      <form onSubmit={search}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <button type='submit'>Search</button>
      </form>

      <p>
        <b>{result}</b>
      </p>
      <section>
        <img src={image} height={200} alt="Animal Image"/>
      </section>
      
      <button onClick={clear}>Clear Animal Database</button>

    </div>
  )
};

export default App;

//npm run dev to start React app and Express server
//npm run prod to build React app and start Express server

