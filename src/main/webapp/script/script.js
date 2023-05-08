//Guardamos la informacion del registro
var email;
email = JSON.parse(localStorage.getItem("email"));
var contraseña;
contraseña = JSON.parse(localStorage.getItem("contraseña"));
var Confirmacion_contraseña;
Confirmacion_contraseña=JSON.parse(localStorage.getItem("Confirmacion_contraseña"));

//Confirmamos si las contraseñas se han puesto iguales
if (!isValidEmail(email)) {
    alert('Ingrese una dirección de correo electrónico válida');
  } else if (contraseña !== Confirmacion_contraseña) {
    alert('Las contraseñas no coinciden');
  } else {
    alert('Registro exitoso');
  }
;

function isValidEmail(email) {
  // Esta función utiliza una expresión regular para verificar si la dirección de correo electrónico es válida
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//Creamos esta funcion para que cuando se registre aparezca bienvenido
function redireccionamiento(){
	location.href = "bienvenido.html";
}

email2 = localStorage.setItem("email",JSON.stringify(email));
contraseña2 = localStorage.setItem("contraseña",JSON.stringify(contraseña));
Confirmacion_contraseña2 = localStorage.setItem("Confirmacion_contraseña",JSON.stringify(Confirmacion_contraseña));