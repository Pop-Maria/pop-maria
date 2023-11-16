//Cache the DOM
var button=document.getElementById("button")
var body=document.getElementById("body")
var imagine=document.getElementById("imagine")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var asteptari=document.getElementById("asteptari")
var anNastere=document.getElementById("anNastere")


const d=new Date()
var year=d.getFullYear()


//Add eventListener to button
button.addEventListener("click", PesteCativaAni)
anNastere.addEventListener("mouseover", displayAge)

function displayAge()
{
	anNastere.innerHTML=year-anNastere.innerHTML
}

function PesteCativaAni()
{
	nume.innerHTML="Functie: Programator"
	prenume.innerHTML="Loc de munca: Bali"
	asteptari.innerHTML="Experiente: <ul><li> intership</li><li>licenta</li></ul>"
	imagine.src="iarna.jpg"
	
	body.style.backgroundColor="orange"
	body.style.color="blue"
	
	imagine.style.opacity="70%"
	imagine.style.borderWidth="20px"
	
}
