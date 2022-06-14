document.querySelector('#btnInput').addEventListener('click',fDriver)

mID = 1
arrAutos = new Array
class cAuto {
    constructor (pModelo){
        this.mModelo = pModelo
        this.mEstado = 'Apagado'
        this.mCondicion = Math.round(Math.random() * (100 - 30) + 30);
        this.mID = mID
        document.querySelector('#trModelo').innerHTML += `<tr><td>${this.mModelo}</td><br>`
        document.querySelector('#trEstado').innerHTML += `<td>${this.mEstado}</td><br>`
        document.querySelector('#trCondicion').innerHTML += `<td>${this.mCondicion}</td><br>`
        document.querySelector('#trID').innerHTML += `<td>${this.mID}</td></tr><br>`
        console.log('Objeto Auto creado.')
        mID++
        arrAutos.push(this)
        console.log(arrAutos)
    }
}

function fCargar(pNombre){
    buffer = new cAuto(pNombre)
}

function fDriver(){
    fCargar(document.querySelector('#txtInput').value)
}