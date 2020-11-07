let i = document.getElementById('in');
let h = document.getElementById('his');
let r = document.getElementById('re');
let primera = document.getElementById('inicio'); 
let segunda = document.getElementById('historia');
let tercera = document.getElementById('reglas');

function primero(){
	primera.style.display = 'block';
	segunda.style.display = 'none';
	tercera.style.display = 'none';
}

i.addEventListener('click',primero);

function segundo(){
	primera.style.display = 'none';
	segunda.style.display = 'block';
	tercera.style.display = 'none';
	
}

h.addEventListener('click',segundo);
 
function tercero(){
	primera.style.display = 'none';
	segunda.style.display = 'none';
	tercera.style.display = 'block';
}

r.addEventListener('click', tercero);