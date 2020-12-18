let memoriaInicial = process.memoryUsage().heapUsed;
let palabra = process.argv[2];

console.log(`La palabra es ${palabra}`);

let arregloPalabras = [];

for (let i=0; i<100; i++) {
	 arregloPalabras.push(`${palabra} cuenta ${i}`);
}

console.log(`Al inicio el uso de memoria era ${memoriaInicial}. \n Memoria Actual utilizado ${process.memoryUsage().heapUsed} 
	\n Despues de utilizar el ciclo para agregar elementos\n al arreglo el proceso esta usando ${process.memoryUsage().heapUsed - memoriaInicial} 
 mas memoria`);
