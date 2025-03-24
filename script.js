let pokemons = [
  { nome: "bulbasaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
  { nome: "ivysaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" },
  { nome: "venusaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" }
];

let current = 0;

function check() {
  let resposta = document.screen.display.value.toLowerCase();
  if (resposta === pokemons[current + 1]?.nome) {
    current++;
    document.getElementById("poke-image").src = pokemons[current].img;
    alert("✨ Evoluiu para " + pokemons[current].nome + "!");
  } else {
    alert("❌ Ops! Tente novamente.");
  }
}

function clearScreen() {
  document.screen.display.value = "";
  current = 0;
  document.getElementById("poke-image").src = pokemons[current].img;
}