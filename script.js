const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//addeventlistener es un escuchador de eventos
/*ademas hay que pasarle dos parametros, el primero es el 
evento en este caso el click y despues la funcion.*/
/*btn.addEventListener('click', btnOnClick);

function btnOnClick () {
  const sumaInputs=input1.value+input2.value;
  pResult.innerText="Resultado: "+sumaInputs;}
  */

//   form.addEventListener('submit', sumarInputValue);

// function sumarInputValue (event) {
//   console.log(event);
//   event.preventDefault();
//   const sumaInputs=input1.value+input2.value;
//   pResult.innerText="Resultado: "+sumaInputs;}

  btn.addEventListener('click', sumarInputValue);

function sumarInputValue(event) {
  //console.log(event);
  //event.preventDefault();
  const sumaInputs=input1.value+input2.value;
  pResult.innerText="Resultado: "+sumaInputs;}