const URL_API = "http://localhost:3000/peliculas";
export const getPeliculas = async () => {
  try {
    const peticion = await fetch(URL_API);
    const parsear = await peticion.json();
    console.log(parsear);
    return parsear;
  } catch (error) {
    console.log(error);
  }
};
