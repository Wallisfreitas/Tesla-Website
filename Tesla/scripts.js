// documente = IR NO HTML
//QUERYSELECTOR = BUSCAR O QUE EU QUISER QUE ELE BUSQUE

let formulario = document.querySelector (".formulario")

console.log (formulario)

function aparecerFormulario(){
    formulario.style.left = "50%"
}

function desaparecerFormulario () {
    formulario.style.left = "-50%"
}