//con esto estamos exportando la api que vamos a trabajar
const API = "https://api.thecatapi.com/v1/images/search";

//aqui estamos sacando todos los valores que sacaremos de la api, al solo sacar imagenes aleatorias solo estamos estamos extrayendo la direccion de cada imagen
async function myCat () {
    //aqui estoy extrayendo la api
    const res = await fetch(API);

    //aqui estoy traduciendo lo extraido
    const data = await res.json();

    //aqui estoy extrayendo parte de la extraccion
    const img = document.querySelector('img');

    //aqui estoy extrayendo lo que nesesito de lo que extrai, osea el atributo cero que es la direccion de la imagen
    img.src = data[0].url;
}

// esto es para habilitar un boton que recargue las imagenes
const myButton = document.querySelector("button");
myButton.onclick = myCat;
