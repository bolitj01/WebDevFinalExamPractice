import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //Any needed hooks
  //TODO
  
  //Functions for API
  //upload
  async function upload(e){
    e.preventDefault();

    
  }

  //search
  async function search(e){
    e.preventDefault();

    
  }

  //clear
  async function clear(e){
    
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