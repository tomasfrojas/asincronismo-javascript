// Resumen de la clase paso a paso…
// Para los nuevos o los que se les hizo confuso entender la lógica aquí un resumen.
// Primero y principal, para entender lo que estamos haciendo es importante saber que queremos hacer; En este caso consumir la API y traer todos los productos, filtrar el nombre de un producto y categoría a la que pertenece, además debemos ir revisando la documentación de la API, esto nos permitirá comprender mejor los llamados que hacemos.
// .

// Primera parte
// Lo primero que hacemos es crear una función “principal” para consumir la API. Recordemos que la constante API, es la url base, es decir si queremos ver que nos devuelve data, nos marcará un error por que la url esta incompleta, ya que si revisan la doc, se necesita mínimo un endpoint (products, categories, user, etc) para devolvernos algo, este endpoint será colocado posteriormente.

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"; //link principal de la API

async function fetchData(urlApi) {
  const response = await fetch(urlApi); //consumimos la API, nos devuelve en un formato que no podemos trabajar en JS
  const data = await response.json(); //convertimos en formato json (objetos y arrays) para manipularlo
  return data;
}

// Segunda Parte
// Creamos la función asíncrona guardada en la variable “anotherFunction” donde iremos haciendo cada uno de los llamados.
// Lo primero que hacemos es traernos todos los productos que contiene la API, que si revisamos la documentación nos dice que necesitamos esta URL:

// https://api.escuelajs.co/api/v1/products

// Por ello en la variable “products” ejecutamos la funcion “principal” en este caso “fetchData”, le colocamos la url base almacenada en “urlApi” pero aqui ya le estamos agregando el endpoint que mencioné anteriormente, en este caso /products, y con esto en esta variable ya tenemos el array con todos los productos.
// En el siguiente llamado en la variable “product” necesitamos traer el objeto de un solo producto, en la doc nos dice que es el mismo link, pero agregado el id del # del producto que queramos, en nuestro caso estamos “desglosando” del array principal con todos los productos (products), el primer producto en la posición 0 y nos traemos el id de ese producto, y en esta variable(product) ya tenemos el objeto de un producto en especifico.

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`); //consumimos la api con todos los productos
    const product = await fetchData(`${urlApi}/products/${products[0].id}`); //traemos el objeto de un solo prodcuto (revisar doc para la api)
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    ); //traemos el obj category, dentro del obj producto por el id

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);

// Luego necesitamos saber la categoría de este producto, en donde el link según la doc es esta.
// El 1 representa el id que corresponde a la categoría del producto(diferente al id del producto como tal), ahora recordemos que la categoría(llamado category) es un objeto que está dentro del objeto del producto, entonces en el llamado colocamos la url base, el endpoint categories, y luego el id de la categoría (“desglosado” como se muestra)

// https://api.escuelajs.co/api/v1/categories/1

// Y ya para concluir mostramos en los console.log lo que necesitamos es decir el array con todos los productos, el nombre del producto, y la categoría a la que corresponde. Ejecutamos la función antoherFunction pasándole el valor del parámetro API, que será reemplazado por urlApi y ya estamos.
