const myURL = document.URL.toString();
const promesa = fetch(myURL); // fetch es una funcion asincrona que nos devuelve promesa se utiliza para hacer solicitudes HTTP  
promesa.then(resultado => console.log(resultado), e => console.log(`Error callback ${e}`)); //




