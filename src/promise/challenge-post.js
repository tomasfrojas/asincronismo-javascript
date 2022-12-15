import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//Tipo de metodos: GET(obtener), POST(enviar), PUT(actualizar), DELETE(eliminar).
//Mode: permisos que va a tener y por defecto siempre estara en cors.
//Credentials: Por defecto puede estar vacio o es lo mismo que asignarle same-origin (en este caso seria el estandar que si no hay ninguna autenticacion no estaria pasando nada).
//Headers: Cabeceras que vamos a enviar en la solicitud para que nos reconozca y decirle que tipo de valor estamos enviando.
//Body: es la informacion que yo le quiero transmitir a la API. En este caso hacemos el metodo de stringify() ya que estamos recibiendo la informacion como un objeto y la queremos enviar como un texto.

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "212",
  price: 212,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
