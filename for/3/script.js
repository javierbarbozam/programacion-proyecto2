let lista = [1]

while(true){
	var numero = prompt("Digite un número");
	lista.push(numero)
	var fin= prompt ("¿Desea finalizar el ciclo?")
	if (fin == "si"){
		break;
	}
}

for (let i = 0; i < lista.length; i++){
	if(lista[i] % 5 == 0 && lista[i] < 150){
		document.write(lista[i])
		document.write("<br>")
	}
	if(lista[i] > 500){
		break;
	}
}
