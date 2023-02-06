const input = document.getElementById('searchPokemon');
const searchButtom = document.getElementById('searchButton');

searchButtom.addEventListener('click', () => {
  let url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon.value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById('name').innerHTML = data.name;
    })
    .catch((erro) => {
      console.log('erro' + erro)
    });
});
