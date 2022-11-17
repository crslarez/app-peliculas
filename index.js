const API_URL = "http://localhost:3000/peliculas";

export const getMovie = async () => {
  try {
    const response = (await fetch(API_URL)).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByName = async (search) => {
  try {
    const response = (await fetch(API_URL + search)).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function createCard(movie) {
  const containerCards = document.getElementById("container-cards");
  const cards = /*html*/ `
    <div class="contededor-movie d-flex">
    <div class="card p-2" style="width: 18rem;">
      <img src="${movie.img}" class="card-img-top" >
      <div class="card-body">
      <p class="card-text">${movie.name}</p>
      <p>${movie.puntaje}</p>
      <p>${movie.genero}</p>
    </div>
    </div>
    `;
  containerCards.innerHTML += cards;
}
