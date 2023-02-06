const input = document.getElementById('searchPokemon');
const button = document.getElementById('searchButton');
const pokemonName = document.getElementById('name');
const resultPic = document.getElementById('resultPic');
const element = document.getElementById('element');
const weakness = document.getElementById('weakness');
const abilities = document.getElementById('abilities');
const flipCard = document.getElementsByClassName('flip-card')[0];
const flipCardInner = document.getElementsByClassName('flip-card-inner')[0];

button.addEventListener('click', (e) => {
  e.preventDefault();
  let url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(input.value.length === 0){
        alert('Digite o nome de um Pokemon!');
        return;
      }
      if (!flipCard.classList.contains('card-rotate')) {
        flipCard.classList.add('card-rotate');
        flipCardInner.classList.add('card-rotate');
        console.log('passou no if')
      } else {
        flipCard.classList.remove('card-rotate');
        flipCardInner.classList.remove('card-rotate');
        setTimeout(() => {
          flipCard.classList.add('card-rotate');
          flipCardInner.classList.add('card-rotate');
        }, 800);
        console.log('não passou no if');
      }
      document.getElementById('name').innerHTML = data.name;
    })
    .catch((erro) => {
      console.log('erro' + erro);
    });
});
