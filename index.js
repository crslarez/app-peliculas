const API_URL = "http://localhost:3000/peliculas";

const getMovie = async () => {
  try {
    const response = (await fetch(API_URL)).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

function createCard(movie) {
  const containerCards = document.getElementById("container-cards");
  const cards = /*html*/ `
    <h1>${movie.name}</h1>
    <p>${movie.puntaje}</p>
    <p>${movie.genero}</p>
    <img src="${movie.img}" alt="image-movie">
    `;
  containerCards.innerHTML = containerCards.innerHTML + cards;
}

getMovie().then((data) => {
  data.forEach((element) => {
    createCard(element);
  });
});
