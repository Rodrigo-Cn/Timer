var relogio = document.querySelector(".numeros");
let time;

function criarSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: "GMT"
    })
}

let segundos = 0;

function iniciarTimer(){
    time = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    },1000);
}

var start = document.querySelector("#start");

start.addEventListener("click",function(){
    iniciarTimer();
})

var pause = document.querySelector("#pause");

pause.addEventListener("click",function(){
    clearInterval(time);
})

var restart = document.querySelector("#restart");

restart.addEventListener("click",function(){
    segundos = 0;
    relogio.innerHTML = criarSegundos(segundos);
})