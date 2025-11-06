// Fetch = Function used for making a HTTP request to fetch resources
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching  in Javascript and used for interacting with API's to retrieve and send data asynchronous over the web
//         fetch(url, {option})

// Promise method
function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    // .then((response) => console.log(response))
    .then((response) => {
      console.log(response);

      if (!response.ok) {
        throw new Error("Could not fetch the resources");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.id);

      const pokemonSprite = data.sprites.front_default;

      const imgElement = document.getElementById("pokemonSprite");
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    })
    .catch((err) => console.error(err));
}

// Async Await method
async function fetchData1() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    console.log(response);

    if (!response.ok) {
      throw new Error("Could not fetch the resources");
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (err) {
    console.error(err);
  }
}
