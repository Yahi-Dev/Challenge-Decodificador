let name;
let pass = false;


game(name);
mensajePrincipal();

function saveName() {
    let nameUser = document.getElementById('nameUser');
    name = nameUser.value;
    game(name);
}

function mensajePrincipal() {
    AsignarTextoElemento('h1', 'Bienvenido al Codificador de Texto');
}


function mensajePersonalizado(name) {
    AsignarTextoElemento('h1', `Perfecto ${name}! Bienvenido al Codificador de Texto`);
}

function game(name) {
    if (name == null) {
        hiddenDiv('part1');
        hiddenDiv('part2');
        AsignarTextoElemento('p', 'El codificador necesita saber su nombre');
    }
    else{
        showDiv('part1');
        showDiv('part2');
        hiddenDiv('partMain');
        hiddenDiv('partQuestion');
        mensajePersonalizado(name);
        AsignarTextoElemento('p', 'Ahora, miremos tu nombre codificado');
        pruebaNombre(name);
        AsignarTextoElemento('span', 'No se permiten mayusculas ni caracteres');
    }
}


function codificarTexto() {
    let wordNormal =  document.getElementById('campoCodificador');
    let word = wordNormal.value;

    let encryptedWord = '';

    for (let char of word) {
        switch (char) {
            case 'e':
                encryptedWord += 'enter';
                break;
            case 'i':
                encryptedWord += 'imes';
                break;
            case 'a':
                encryptedWord += 'ai';
                break;
            case 'o':
                encryptedWord += 'ober';
                break;
            case 'u':
                encryptedWord += 'ufat';
                break;
            default:
                encryptedWord += char;
        }
    }

    let areaTextoCodificado = document.getElementById('areaDecodificador');
    areaTextoCodificado.innerHTML = encryptedWord.toLowerCase();
}

function decodificarTexto() {
    let wordNormal = document.getElementById('areaDecodificador');
    let word = wordNormal.value;

    let decryptedWord = word.toLowerCase();
    decryptedWord = decryptedWord.replace(/enter/g, 'e');
    decryptedWord = decryptedWord.replace(/imes/g, 'i');
    decryptedWord = decryptedWord.replace(/ai/g, 'a');
    decryptedWord = decryptedWord.replace(/ober/g, 'o');
    decryptedWord = decryptedWord.replace(/ufat/g, 'u');

    let areaTextoCodificado = document.getElementById('campoCodificador');
    areaTextoCodificado.value  = decryptedWord;
}

function pruebaNombre(word) {
    let encryptedWord = '';

    for (let char of word) {
        switch (char) {
            case 'e':
                encryptedWord += 'enter';
                break;
            case 'i':
                encryptedWord += 'imes';
                break;
            case 'a':
                encryptedWord += 'ai';
                break;
            case 'o':
                encryptedWord += 'ober';
                break;
            case 'u':
                encryptedWord += 'ufat';
                break;
            default:
                encryptedWord += char;
        }
    }

    let areaTextoCodificado = document.getElementById('areaDecodificador');
    areaTextoCodificado.innerHTML = encryptedWord;
}

function copiarTexto() {
    let textoCopiar = document.getElementById('areaDecodificador');

    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');
}

function limpiarCajaDecodificadora() {
    LimpiarCaja("areaDecodificador");
}

function limpiarCajaCodificadora() {
    LimpiarCaja("campoCodificador");
}

function LimpiarCaja(id) {
    let valorCaja = document.getElementById(`${id}`);
    valorCaja.value = '';
}

function showDiv(tag) {
    document.querySelector(`#${tag}`).style.display = 'block';
}

function hiddenDiv(tag) {
    document.querySelector(`#${tag}`).style.display = 'none';
}

function AsignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

//Funcion para animar el titulo de la pagina web
function animeTitle(text) {
    let position = 0;

    function moveTitle() {
        document.title = text.substring(position) + text.substring(0, position);
        position = (position + 1) % text.length;
    }

    setInterval(moveTitle, 250);
};

window.onload = function() {
    animeTitle("Decodificador (Chagellenge) ");
};