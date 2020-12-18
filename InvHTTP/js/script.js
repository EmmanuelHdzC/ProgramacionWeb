let inicio = document.getElementById('Inicio');
let arq = document.getElementById('Arq');
let carac = document.getElementById('Carac');
let puede = document.getElementById('Puede')
let http = document.getElementById('HTTP'); 
let arquitectura = document.getElementById('Arquitectura');
let caracteristicas = document.getElementById('Caracteristicas');
let sepuede = document.getElementById('sePuede');

let im1 = document.getElementById('primera');

function imagenesG(){
	im1.style.width = '600px';
}

im1.addEventListener('mouseover',imagenesG);

function imagenesC(){
	im1.style.width = '';
}

im1.addEventListener('mouseout',imagenesC);

function primero(){
	http.style.display = 'block';
	arquitectura.style.display = 'none';
	caracteristicas.style.display = 'none';
	sepuede.style.display = 'none';
}

inicio.addEventListener('click',primero);

function segundo(){
	http.style.display = 'none';
	arquitectura.style.display = 'block';
	caracteristicas.style.display = 'none';
	sepuede.style.display = 'none';
}

arq.addEventListener('click',segundo);
 
function tercero(){
	http.style.display = 'none';
	arquitectura.style.display = 'none';
	caracteristicas.style.display = 'block';
	sepuede.style.display = 'none';
}

carac.addEventListener('click', tercero);

function cuarto(){
	http.style.display = 'none';
	arquitectura.style.display = 'none';
	caracteristicas.style.display = 'none';
	sepuede.style.display = 'block';
}

puede.addEventListener('click',cuarto);