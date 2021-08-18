
var usuario  = {
    emai:'',
    password:''
}

var dbUsuarios = new Array();

let btnRegistro = document.getElementById('registro');
let emailinput = document.getElementById('email').value;
let passinput = document.getElementById('password').value;
let btnIniciarSessiom = document.getElementById('session');

btnRegistro.addEventListener('click', e =>{

    usuario.emai = emailinput;
    usuario.password = passinput;
    dbUsuarios.push(usuario)
    alert('Usuario Registrado')
    Limpiar()

})
function Limpiar(){
    emailinput = "";
    passinput = "";
}
function IniciarSesion(email,password){

    var obj = dbUsuarios.find(usuario.emai == email)
    if(obj !=null){
        alert('Iniciastes Sesion')
    }else{
        alert('No Existes')
    }
}
btnIniciarSessiom.addEventListener('click',e=>{

    IniciarSesion(emailinput,passinput);
})