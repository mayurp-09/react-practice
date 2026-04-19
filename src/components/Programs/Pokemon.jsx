import React, { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const result = await response.json();
        setPokemon(result);
        setLoading(false);

    };

    getData();
  }, []);

  if (loading) return <p>Catching Pokemon... 🔴</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '200px' }}>
      <h2>Name: {pokemon.name}</h2>
      <p>Weight: {pokemon.weight}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export default Pokemon;