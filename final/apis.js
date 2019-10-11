// Obtener usuarios completos

async function obtenerPersona() {
    let response = await fetch('https://randomuser.me/api/?results=10')
    let data = await response.json()
    return data
}

async function usuarios() {
    let lista = `<ul class="list-group list-group-flush" >
    <li class="list-group-item text-center"> <h4>Nombres y Correo electronico</h4></li>`
    let persona = await obtenerPersona()
    let arreglo = persona.results
    for (let i = 0; i < arreglo.length; i++) {
        lista += `<li class="list-group-item">${arreglo[i].name.last} edad ${arreglo[i].email}</li>`
    }
    lista += `</ul>`
    return lista
}

async function main() {
    let lista = await usuarios()
    document.getElementById("arrusu").innerHTML = lista
}



var contenido = document.querySelector('#contenido')

function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {

            contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                `
        })
}