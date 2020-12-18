class Media{
	constructor(titulo){
		this._titulo = titulo;
		this._calificacion = [];
		this._prestado = false;
	}
	get titulo(){
		return this._titulo;
	}
	get calificacion(){
		return this._calificacion
	}
	get prestado(){
		return this._prestado; 
	}
	set titulo(titulo){
		this._titulo = titulo;
	}
	agregarCalificacion(calificacion){
		this._calificacion.push(calificacion);
	}
	cambiarEstatusPrestado(){
		if(this._prestado===false){
			this._prestado = true;
		}
			else{
				this._prestado = false;
				}
	}
	static obtenerCalificacionPromedio(){
		let promedio = 0;
		for (let i = 0; i < this._calificacion.length; i++){
			promedio = promedio+this._calificacion[i];
		}
		promedio = promedio/this._calificacion.length;
		return promedio;
	}
}

const app = new Media('Todo');
console.log(`El archivo media ${app.titulo} esta ${app.prestado}`);
app.cambiarEstatusPrestado();
console.log(`El estatus de prestamo cambio a ${app.prestado}`);
app.agregarCalificacion(100);
app.agregarCalificacion(80);
app.agregarCalificacion(60);
console.log(`El promedio de la media llamada ${app.titulo} es 
	${app.obtenerCalificacionPromedio} `);

