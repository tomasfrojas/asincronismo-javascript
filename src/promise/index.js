//Las promesas son usadas para trabajar en el asincronismo en JS,una promesa es algo que va a pasar: cuando?: Ahora, manana o nunca.
// Las promesas tienen 3 estados: pendiente, cumplido y rechazado.
// Se crea las promesas con la palabra reservada promise y nos va a regresar una funcion que recibe 2 funciones  o elementos dentro :resolve y reject.

const promise = new Promise(function (resolve, reject) {
  //segun el caso se puede llamar con exito a resolve y mostrar la informacion al usuario, o hacer una validacion de la informacion que estamos recibiendo o de algun estado del servidor que nos entregue para decirle al usuario con el error que nos puede estar entregando.

  resolve("Hey, todo fue correcto!");
});

//then y catch nos van a permitir concatenar algunas solicitudes o simplemente mnostrar el error

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`we have ${cows} cows on the farm to supply the needs`);
  } else {
    reject("There is no enough cows in the farm");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally"));

function delay(time, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}
delay(3000, "Hello after 3s").then((message) => console.log(message));
