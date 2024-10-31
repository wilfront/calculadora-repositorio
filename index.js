function insert (num){
    document.getElementById('resultado').innerHTML += num;
}

function clean (){
    document.getElementById('resultado').innerHTML =('');
}

function somar (){
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = ('Nenhum comando');
    }
}
