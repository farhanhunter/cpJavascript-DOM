// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseUrlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const baseUrlSpecies = "https://pokeapi.co/api/v2/pokemon-species/";

for (let i = 1; i <= 641; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  // Create a limited number of badges based on a condition (replace with your logic)
  const speciesPokemon = document.createElement("p");
  speciesPokemon.namespaceURI = `${baseUrlSpecies}{i}/`;

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseUrlImg}${i}.png`;

  const label = document.createElement("span");
  label.innerText = `#${i}`;

  pokeBall.appendChild(speciesPokemon);
  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(label);
  container.appendChild(pokeBall);
}
