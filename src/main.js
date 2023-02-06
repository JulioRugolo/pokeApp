const poke = 'pikachu';

const loadPokemon = () => {
  let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.clear();
      document.getElementById('text-name').innerHTML = data.name;
    })
    .catch((erro) => {
      console.log('erro' + erro)
    });
};
loadPokemon();