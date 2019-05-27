let curso = [{ 
	id: 1,
	nombre: "node.js", 
	duracion: "40 horas",          
	valor: "30000"  
	},
	{ 
	id: 2,
	nombre: "ingles", 
	duracion: "30 horas",          
	valor: "10000"  
	}, 
	 { 
	id: 3,
	nombre: "bolsa de valores", 
	duracion: "20 horas",          
	valor: "20000"  
	}]; 



let cursouno = curso.find(id_curso =>  id_curso.id == 1)
 setTimeout(function(){
 	
 console.log('el codigo curso ' +cursouno.id+ '\n' + 'nombre ' + cursouno.nombre +'\n'+'duracion de ' + cursouno.duracion +'\n'+
'por un valor de ' + cursouno.valor + '\n');
 },2000);

let cursodos = curso.find(id_curso =>  id_curso.id == 2)
 setTimeout(function(){

console.log('el codigo curso ' +cursodos.id+ '\n' + 'nombre ' + cursodos.nombre +'\n'+'duracion de ' + cursodos.duracion +'\n'+
'por un valor de ' + cursodos.valor + '\n');
 },4000);

let cursotres = curso.find(id_curso =>  id_curso.id == 3)
 
setTimeout(function(){
 	
console.log('el codigo curso ' +cursotres.id+ '\n' + 'nombre ' + cursotres.nombre +'\n'+'duracion de ' + cursotres.duracion +'\n'+
'por un valor de ' + cursotres.valor + '\n');
 },6000);


 module.exports = {
    cursouno,
    cursodos,
    cursotres

 };


