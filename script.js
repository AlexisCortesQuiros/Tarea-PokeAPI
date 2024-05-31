document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar un Pokémon aleatorio
    function loadRandomPokemon() {
      // Obtener un número aleatorio entre 1 y 898 (cantidad total de Pokémon)
      const randomPokemonId = Math.floor(Math.random() * 898) + 1;

      // URL de la PokeAPI para obtener datos de un Pokémon específico
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`;

      // Realizar la solicitud a la PokeAPI
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Obtener la información relevante del Pokémon
          const pokemonName = data.name;
          const pokemonId = data.id;
          const pokemonImage = data.sprites.front_default;
          const pokemonTypes = data.types.map(type => type.type.name).join(', ');

          // Mostrar la información en la página
          document.getElementById('pokemon-image').src = pokemonImage;

          const infoDiv = document.getElementById('pokemon-info');
          infoDiv.innerHTML = `
            <h2>Nombre: ${pokemonName}</h2>
            <p>ID: ${pokemonId}</p>
            <p>Tipo(s): ${pokemonTypes}</p>
          `;
        })
        .catch(error => console.error('Error al obtener datos de la PokeAPI:', error));
    }

    // Cargar un Pokémon aleatorio al cargar la página
    loadRandomPokemon();

    // Agregar un evento al botón para cargar otro Pokémon aleatorio
    document.getElementById('reload-button').addEventListener('click', loadRandomPokemon);
  });