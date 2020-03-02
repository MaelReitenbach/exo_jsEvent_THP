//Foncitonnalité 1

var foot = document.getElementsByTagName('footer')[0];
var num = 0

  function changeFoot(){
  	num++
    console.log(`clique numéro ${num}`)
}
foot.addEventListener("click", changeFoot);

//Fonctionnalité 2

var btnMenu = document.querySelectorAll("button.navbar-toggler")[0];
var navMenu = document.getElementById('navbarHeader');

function togMenu(){
	navMenu.classList.toggle("collapse") 
}

btnMenu.addEventListener("click", togMenu);

//Fonctionnalité 3

var btnCard = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[0];
var textCard = document.querySelectorAll("p.card-text")[0];

var changeCard = function(){
	textCard.style.color = "red";
}

btnCard.addEventListener("click", changeCard);

//Foncitonnalité 4

var btnCard2 = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];
var textCard2 = document.querySelectorAll("p.card-text")[1];

var changeCardColor2 = function(){
	if (textCard2.style.color === "green"){
		textCard2.style.color = ""
	}
	else textCard2.style.color = "green"
}

btnCard2.addEventListener("click", changeCardColor2);


//Fonctionnalité 6

var listeCards = document.querySelectorAll("div.card.mb-4.box-shadow");
var btnView = document.querySelectorAll("button.btn.btn-sm.btn-success");


for(let i = 0; i < btnView.length ; i++){
	let reduire = function (){
		if (listeCards[i].firstElementChild.style.width !== "20%"){
			listeCards[i].firstElementChild.style.width = "20%";
			}
		else {
			listeCards[i].firstElementChild.style.width = "";
			}
		}

	btnView[i].addEventListener("mousemove", reduire);
}

//Fonctionnalité 7

var gris = document.querySelectorAll("a.btn.btn-secondary.my-2")[0];
var labasefrr = document.getElementsByClassName("row")[1];

var bouillabaisse = function(){	
	labasefrr.insertBefore(labasefrr.lastElementChild, labasefrr.firstElementChild);
}

gris.addEventListener("click", bouillabaisse);
