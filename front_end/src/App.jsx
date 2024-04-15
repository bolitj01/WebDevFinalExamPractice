import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //Any needed hooks
  const [result, setResult] = useState("")
  const [image, setImage] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setResult("");
    }, 1000)
  }, [result]);
  
  //Functions for API
  //upload
  async function upload(e){
    e.preventDefault();

    const res = await fetch("/animals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.picture.value
      })
    });

    console.log(res.status);

    if (res.status == 201){
      const result = await res.text();
      console.log(`Result: ${result}`);
      setResult(result);
    }
  }

  //search
  async function search(e){
    e.preventDefault();

    const res = await fetch(`/animals/${e.target.name.value}`);

    console.log(res.status);

    if (res.status == 200){
      const data = await res.json();
      console.log(`Data: ${data}`);
      setResult(data.name);
      setImage(data.image);
    }
    else if (res.status == 404){
      const result = await res.text();
      console.log(`Result: ${result}`);
      setResult(result);
      setImage(null);
    }
  }

  //clear
  async function clear(e){
    const res = await fetch(`/animals/`, {
      method: "DELETE"
    });

    console.log(res.status);

    if (res.status == 200){
      const result = await res.text();
      console.log(`Result: ${result}`);
      setResult(result);
      setImage(null);
    }
  }

  return (
    <div className="App">
      <h1>Animal Collection</h1>
      <h3>Add Animal</h3>
      <form onSubmit={upload}>
        <label htmlFor="name">Animal:</label>
        <input type="text" name="name" id="name" placeholder='Name'/>
        <label htmlFor="picture">Picture URL:</label>
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
        {result}
      </p>
      <section>
        <img src={image} height={200} alt="Animal Image"/>
      </section>
      
      <button onClick={clear}>Clear Animal Database</button>

    </div>
  )
};

export default App;

