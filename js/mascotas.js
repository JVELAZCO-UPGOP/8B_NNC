const listaMascotas = document.getElementById('Lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const lbEditar = document.getElementById('exampleModalCenterTitle');
const indice = document.getElementById('indice');

let mascotas = [
    {
        tipo: "Perro",
        nombre: "Luna",
        dueno: "Nora"
    },

    {
        tipo: "Gato",
        nombre: "Aly",
        dueno: "Karen"
    }

];
function ConfirmarEliminar(){
    var respuesta = confirm("Estas seguro que deseas eliminar?");

    if(respuesta == true)
    {
        return true;
    }

    else
    {
        return false;
    }
}


function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar"><i class="far fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar" ><i class="far fa-trash-alt"></i></button>
    </div>
    </td>
</tr>`).join("");

listaMascotas.innerHTML =htmlMascotas;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=> botonEditar.onclick = editar(index));
Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=> botonEliminar.onclick = eliminar(index));


}


function enviardatos(evento){
    
    evento.preventDefault();
    const datos={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion){
        case 'Editar':
            mascotas[indice.value]=datos;
            break;
            default:
                mascotas.push(datos);
                break;
    }
    
    
    listarMascotas();
    reserModal();
}

function editar(index) {
    return function handler(){
        btnGuardar.innerHTML='Editar'
        lbEditar.innerHTML='Editar Mascota'
        $('#exampleModalCenter').modal('toggle');
        const mascota = mascotas[index];
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        tipo.value = mascota.tipo;
        indice.value=index;
        

    }

    reserModal();
}

function reserModal(){
    nombre.value = '';
    dueno.value = '';
    tipo.value = '';
    indice.value='';
    btnGuardar.innerHTML='Crear';
}

function eliminar(index) {
    return function clickEnEliminar() {
    mascotas = mascotas.filter((mascota, indiceMascota)=>indiceMascota !== index);
    listarMascotas();
    }
}

listarMascotas();

form.onsubmit = enviardatos;
btnGuardar.onclick = enviardatos;



