const form = document.querySelector(".formulario");
const showGuestListSelector = document.querySelector("#guestList");

const getValueById = (id) => document.querySelector(`#${id}`).value;

const showError = (id) =>
    document.querySelector(`#${id}`).classList.add("error");

const getNationality = (nationality) => {
    const notFoundNationality = "No se reconoce esta nacionalidad";

    const nationlities = {
        ar: "Argentina",
        mx: "Mexicana",
        vnzl: "Venezolana",
        per: "Peruana",
    };

    return nationlities[nationality] ?? notFoundNationality;
};

const guestList = [];

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

const createItemGuestList = (description, value) => {
    const card = document.createElement("article");
    const spanName = document.createElement("span");
    const inputName = document.createElement("input");
    const separation = document.createElement("br");
    spanName.textContent = description + ": ";
    inputName.value = value;
    card.appendChild(spanName);
    card.appendChild(inputName);
    card.appendChild(separation);
    showGuestListSelector.appendChild(card);
};

const addGuest = (guestName, age, nationality) => {
    guestList.push({
        guestName,
        age,
        nationality: getNationality(nationality),
    });
};

const showGuestList = () => {
    showGuestListSelector.innerHTML = "";
    guestList.forEach((guest) => {
        const { guestName, age, nationality } = guest;

        createItemGuestList("Nombre", guestName);
        createItemGuestList("Edad", age);
        createItemGuestList("Nacinalidad", nationality);
    });
};

function agregarInvitado(nombre, edad, nacionalidad) {
    var lista = document.getElementById("lista-de-invitados");

    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");
    lista.appendChild(elementoLista);

    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = "Nombre: ";
    inputNombre.value = nombre;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);

    function crearElemento(descripcion, valor) {
        var spanNombre = document.createElement("span");
        var inputNombre = document.createElement("input");
        var espacio = document.createElement("br");
        spanNombre.textContent = descripcion + ": ";
        inputNombre.value = valor;
        elementoLista.appendChild(spanNombre);
        elementoLista.appendChild(inputNombre);
        elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";
    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function() {
        // this.parentNode.style.display = 'none';
        botonBorrar.parentNode.remove();
    };
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const guestName = getValueById("name");
    const age = getValueById("age");
    const nationality = getValueById("nationality");

    if (guestName.length === 0) {
        showError("name");
    }

    if (age < 18 || age > 120) {
        showError("age");
    }

    if (guestName.length > 0 && age > 18 && age < 120) {
        addGuest(guestName, age, nationality);
    }

    showGuestList();
});
