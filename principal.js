const {cursouno,cursodos,cursotres} = require('./cursos');
const express = require('express');
const app = express();


const opcion={
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'x'
	}
}

const argv = require('yargs')
			.command('inscribir','inscribirme en un curso',opcion)
			.argv
			
idinscripcion= argv.id;
nombre=argv.nombre;
cedula= argv.cedula;

let texto;
	if (idinscripcion== 1) 
    {

	  texto=("Se Ha inscrito Correctamente<br>"+" el/la estudiante se llama  "+nombre+'\n'+" cedula "+cedula+'\n'+"se matriculo al codigo del curso  "+idinscripcion+'\n'+"  al curso llamado  "+cursouno.nombre+'\n'+" con valor de  "+cursouno.valor+'\n'+" con una duracion "+cursouno.duracion)
 
    }else if (idinscripcion == 2){

    	texto=("Se Ha inscrito Correctamente<br>"+"el/la estudiante se llama "+nombre+'\n'+" cedula "+cedula+'\n'+" se matriculo al codigo del curso "+idinscripcion+'\n'+" al curso llamado "+cursodos.nombre+'\n'+" con valor de "+cursodos.valor+'\n'+" con una duracion "+cursodos.duracion);


    }else if(idinscripcion==3){

    	texto=("Se Ha inscrito Correctamente<br>"+" el/la estudiante se llama "+nombre+'\n'+" cedula "+cedula+'\n'+" se matriculo al codigo del curso  "+idinscripcion+'\n'+"al curso llamado "+cursotres.nombre+'\n'+" con valor de "+cursotres.valor+'\n'+" con una duracion "+cursotres.duracion)
    }else{
    		console.log("no se ha inscrito a ningun curso")
    		console.log("inscribase a un curso");	
    }


app.get('/', function (req, res) {
    res.send(texto);
});
	
app.listen(3000);