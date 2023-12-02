const move = document.getElementById("dados")

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

move.addEventListener("click", (event) =>{
    alert('hola');
    const valor = randomInt(6) + 1
    let req = {'movement': valor}
    let mover = JSON.stringify(req);
    console.log(mover);
    
});