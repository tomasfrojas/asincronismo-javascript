import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

// Se va a realizar una funcion que va a recibir como argumento la URL de la API que queremos llamar y esto nos va a retornar el llamado consecuente de fecth el cual es una promesa por lo tanto podremos usar las palabras reservadas then, catch o finally.

function fetchData(urlApi) {
  return fetch(urlApi);
}
// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log("Hola!!");
//   })
//   .catch((error) => console.log(error));

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .then(() => console.log("Finally"));
