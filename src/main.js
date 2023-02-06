import Pokedex from 'pokedex-promise-v2';
const options = {
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const pokedex = new Pokedex(options);


pokedex.getPokemonByName("pikachu")
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log('There was an ERROR: ', error);
});