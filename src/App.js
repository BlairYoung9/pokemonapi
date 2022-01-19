import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';





function App() {

  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = (props) => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => { return response.json() })
      .then(jsonRes => {
        console.log(jsonRes);
        setPokemon(jsonRes.results);
      })


  }

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      console.log(res.data)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
    }

  return (
    <div className="App">
      <h2>Pokemon</h2>

      <button onClick={fetchPokemon}>Fetch</button>
      <button onClick={axiosPokemon}> AXIOS pokemon</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map((poke, idx) => {
              return (
                <tr key = {idx}>
                  <td>{poke.name}</td>
                  <td>{poke.url}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
