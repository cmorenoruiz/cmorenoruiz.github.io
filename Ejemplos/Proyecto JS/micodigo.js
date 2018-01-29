/*Modelo el croupier*/
var croupier ={};
croupier.Reverse=function(){
	this.baraja.reverse();
};

croupier.barajar=function(cartas){
	var cartaTemporal;
	var aleatorio;
	for (var i=0; i<cartas.length; i++){
		cartaTemporal=cartas[i];
		aleatorio= Math.floor(Math.random() * Math.floor(cartas.length)); /*Nunca saldrá cartas.length*/
		cartas[i]=cartas[aleatorio];
		cartas[aleatorio]=cartaTemporal;
	}
}


croupier.repartir=function(){
	console.log(this.baraja[0].valor);
};

croupier.puntuar=function(mano){
	var resultado=0;
	for (var i=0; i<mano.length; i++){
		resultado=resultado+mano[i].valor;
	}
	return resultado;
};


croupier.baraja=function(){
var baraja = [];
for (var j=1;j<=4;j=j+1){
	var paloActual;
	switch (j){
        case 1:paloActual="P";break;
        case 2:paloActual="T";break;
        case 3:paloActual="C";break;
        case 4:paloActual="D";
    }
	for (var i=1;i<=13;i=i+1){
		baraja[baraja.length]={palo:paloActual, valor:i};
	}
}
return baraja;
};

croupier.puntuaEspecial=function(mano){
	var resultado=0;
	for (var i=0; i<mano.length; i++){
		switch (mano[i].valor){
            case 11: resultado+=12;
			break;
			case 12: resultado+=14;
			break;
			case 13: resultado+=17;
			break;
			case 1: resultado+=20;
			break;
            default:resultado+=mano[i].valor;
			break;
	}
	return resultado;
}};

croupier.toma5=function (cartas){
	var cartasTemporal=[];
	var aleatorio;
	for (var i=0; i<5; i++){
		aleatorio=Math.floor(Math.random()*Math.floor(cartas.length)); /*Nunca saldrá cartas.length*/
	cartasTemporal.push(cartas[aleatorio]);
	}
	return cartasTemporal;
};


/*Modelamos al jugador*/
var jugador={};
jugador.mano=[];
jugador.pasar=function(){
	if (this.mano[0].valor>9) then
		return true;
		else return false;
}

function blackjack(){
	/*Modelamos la baraja pidiéndosela al croupier*/
	var nuevabaraja=croupier.baraja();
	var mijugador=jugador;
	var micropier=croupier;
	/*Aquí me quedo*/
}




croupier.toma5=function (cartas){
	var cartasTemporal=[];
	var aleatorio;
	for (var i=0; i<5; i++){
		aleatorio=Math.floor(Math.random()*Math.floor(cartas.length)); /*Nunca saldrá cartas.length*/
	cartasTemporal.push(cartas[aleatorio]);
	}
	return cartasTemporal;
};


var nuevamano=croupier.toma5(nuevabaraja);
croupier.puntuaEspecial(nuevamano);
