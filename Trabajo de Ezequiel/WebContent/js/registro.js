window.onload = constructor;

//var UsuarioArray = [];

function init(){
	
	//mostrar datos
	
	mostrarDatosClase();	
	
	/*for(let objeto = personas; 		objeto !== null; 		objeto = Object.getPrototypeOf(objeto)){
	      console.log(Object.getOwnPropertyNames(objeto));
	   }  */ 
	
	
	/*var atributos = personas.values;
		
	console.log (atributos);*/

	/*for (let j = personas.length - 1; j>=0; --j){
		invPersonas.push(personas[j]);
	}*/
	
}

function constructor() { 

	this.UsuarioArray = [
		{user: "user123", password:"12345", nombre:"Ismael", apellidos:"Garcia Martin", direccion:"C/ Falsa 123", sexo: "H", ciudad:"Salamanca", cp:37006},
		{user: "admin", password:"admin", nombre:"Ezequiel", apellidos:"Mata Moros", direccion:"C/ Infierno 666", sexo: "H", ciudad:"Madrid", cp:22700},
	];

	this.tableBody = document.querySelector("#tableContactBody");

	init();
}

function agregarUsuarioNuevo(user, pass, nom, ape, dir, codpost){

	let registro 		= new UsuarioArray();

	registro.user 		= user;
	registro.password 	= pass;
	registro.nombre		= nom;
	registro.Apellidos 	= ape;
	registro.direccion 	= dir;
	registro.cp 		= codpost;

	this.UsuarioArray.push(registro);

}

function crearTablaDeDatos(){



}

function buildTable() {

	console.log("Estoy en COnstruir tabla");

  	for(let j in UsuarioArray) {
  		addLineToHTMLTable(UsuarioArray[j].user, UsuarioArray[j].password, UsuarioArray[j].nombre, UsuarioArray[j].apellidos,
  		UsuarioArray[j].direccion, UsuarioArray[j].sexo, UsuarioArray[j].ciudad, UsuarioArray[j].cp);
  	}

  	//limpiarTabla();
}


function addLineToHTMLTable(user, pass, nom, ape, dir, sex, city, cp) {
    
    // Add a new row at the end of the table
   let newRow   		= tableBody.insertRow();
   // add  new cells to the row
   let columna 			= newRow.insertCell();
   columna.innerHTML	= user;
   let columna2  		= newRow.insertCell();
   columna2.innerHTML 	= pass;
   let columna3  		= newRow.insertCell();
   columna3.innerHTML	= nom;
   let columna4  		= newRow.insertCell();
   columna4.innerHTML	= ape;
   let columna5	  	 	= newRow.insertCell();
   columna5.innerHTML	= dir;
   let columna6  		= newRow.insertCell();
   columna6.innerHTML	= sex;
   let columna7  		= newRow.insertCell();
   columna7.innerHTML 	= city;
   let columna8  		= newRow.insertCell();
   columna8.innerHTML 	= cp;

   let buttonCell   	= newRow.insertCell(); 
   let boton 			= document.createElement('input');
   boton.setAttribute(name="type", value="button");
   boton.setAttribute(name="value", value="Delete");
   boton.setAttribute(name="onclick", value="removeRow(this)");
   buttonCell.append(boton);

   let botonEditarCelda		= newRow.insertCell();
   let botonEditar 			=document.createElement('input');
   botonEditar.setAttribute(name="type", value="button");
   botonEditar.setAttribute(name="value", value="Editar");
   botonEditar.setAttribute(name="onclick", value="editRow(this)");
   botonEditarCelda.append(botonEditar);

}


function getRadioButtonSelectedValue(grupoRadio){

	for(let i=0; i<grupoRadio.length; i++){
		if(grupoRadio[i].checked){
         return grupoRadio[i].value;
        }
	}
       
}

function mostrarDatosClase(){ /*Funcion solo de prueba para testear el codigo*/

	for(let i  = 0; i < UsuarioArray.length; i++){
		console.log("El usuario es: "+UsuarioArray[i].user+" y su nombre es: "+UsuarioArray[i].nombre);	
	}

}

function agregarUsuario(){ /*Boton confirmar del formulario registro*/
	console.log("agrego usuario");

	let miRegistro 		 = new Object(); //creo objeto registro

	miRegistro.user 	 = document.getElementById("usuario").value;
	miRegistro.password  = document.getElementById("contraseña").value;
	miRegistro.nombre    = document.getElementById("nombre").value;
	miRegistro.apellidos = document.getElementById("Apellidos").value;	
	miRegistro.direccion = document.getElementById("direccion").value;
	miRegistro.sexo 	 = getRadioButtonSelectedValue(document.getElementsByName("sex"));
	miRegistro.ciudad 	 = document.getElementById("ciudad").value;
	miRegistro.cp 		 = document.getElementById("cPostal").value;

	this.UsuarioArray.push(miRegistro); //agregamos el objeto al array
}

function volver(){
	console.log("vuelvo al menu");
	mostrarDatosClase();

}

 function removeRow(buttonCellParm) { //para borrar la linea cuando presionamos borrar en la tabla
    pos = buttonCellParm.parentNode.parentNode.rowIndex;
    document.getElementById("tablaDatosRegistros").deleteRow(pos);
 }

 function editRow(buttonCellParm){//para editar los datos de la linea 

 	console.log(buttonCellParm);
 	let usuario 	= buttonCellParm.parentNode.parentNode.rowIndex;
 	console.log("Esto es la fila: "+usuario);



 }


function limpiarTabla(){

	let tableHeaderRowCount = 1;
	let table = document.getElementById('tablaDatosRegistros');
	let rowCount = table.rows.length;
	console.log("FILAS:"+rowCount);
	for (let i = tableHeaderRowCount; i < rowCount; i++) {
	    table.deleteRow(tableHeaderRowCount);
	}

}
