import './App.css'

function App() {
  //Any needed hooks
  //TODO
  
  //Functions for API
  //upload
  async function upload(e){
    e.preventDefault();

    //TODO
  }

  //search
  async function search(e){
    e.preventDefault();

    //TODO
  }

  //clear
  async function clear(e){

    //TODO

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
        {/* TODO */}
      </p>
      <section>
        <img src={/* TODO */} height={200} alt="Animal Image"/>
      </section>
      
      <button onClick={clear}>Clear Animal Database</button>

    </div>
  )
};

export default App;

//npm run dev to start React app and Express server

