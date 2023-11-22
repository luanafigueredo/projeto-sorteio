const botao = document.querySelector(".buttonResult");
const input = document.getElementById("aparecerResultado");

botao.addEventListener('click', function () {

  const min = Math.ceil(document.querySelector(".inputMin").value)
  const max = Math.floor(document.querySelector(".inputMax").value)
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  input.value = result

})













// function generateNumber() {

//     const min = Math.ceil(document.querySelector('.input-min').value)
//     const max = Math.floor(document.querySelector('.input-max').value)

//     const result = Math.floor(Math.randon() * (max - min + 1)) + min;

//     alert(result)
// }




