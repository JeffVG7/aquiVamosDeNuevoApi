console.log("hello world!")

//con esto estamos exportando la api que vamos a trabajar
const URL = "https://api.thecatapi.com/v1/images/search";

//aqui estamos sacando todos los valores que sacaremos de la api, al solo sacar imagenes aleatorias solo estamos estamos extrayendo la direccion de cada imagen
fetch(URL)
.then(res => res.json())
.then(data => {
    const img = document.querySelector("img");
    img.src = data[0].url;
} )