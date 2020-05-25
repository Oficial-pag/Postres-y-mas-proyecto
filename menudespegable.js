var miMenuDespegable, miMenuDespegable2;//declarando variables 
function mostrar() {
	// body...
	document.getElementById('miMenu').classList.toggle("mostrar");//selecciona un elemento del documento por medio del valor del atributo
	document.getElementById('miMenu2').classList.remove("mostrar");
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDespegable=document.getElementById('miMenu');
		if (miMenuDespegable.classList.contains('mostrar')) {/*contains:determina si una cadena de texto puede ser
		 encontrada dentro de otra cadena de texto*/
			miMenuDespegable.classList.remove("mostrar");//remove: elimina eventos de los elementos seleccionados.
		}
	}
}
function mostrar2() {//mostrar2 es el valor recibido 
	// body...
	document.getElementById('miMenu2').classList.toggle("mostrar");//si el elemento se elige, se mostraran los otros elementos
	document.getElementById('miMenu').classList.remove("mostrar");// si el elemento no se "elige" no se mostraran los demas elementos
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDespegable=document.getElementById('miMenu2');
		if (miMenuDespegable.classList.contains('mostrar')) {/*contains:determina si una cadena de texto puede ser
		 encontrada dentro de otra cadena de texto*/
			miMenuDespegable.classList.remove("mostrar");//remove: elimina eventos de los elementos seleccionados.
		}
	}
}