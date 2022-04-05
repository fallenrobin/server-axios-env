
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getTrending();
  }, [])

  const getTrending = () => {
    axios.get('/trending')
      .then(response => {
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">APIS</h1>
        <h4><i>APIS</i></h4>
      </header>
      <br />
    </div>
  );

}

export default App;
