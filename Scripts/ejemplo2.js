let promesa = new Promise((response)=>{
	if(true) {
		resolve('Hola Mundo');
	}
	setTimeout(hola,2000);
});
promesa.then((response) =>{
console.log('response',response);
})