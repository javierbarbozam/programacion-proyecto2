let lista = [12,75,150,180,145,525,50]

for (let i = 0; i < lista.length; i++){
	if(lista[i] % 5 == 0 && lista[i] < 150){
		document.write(lista[i])
		document.write("<br>")
	}
	if(lista[i] > 500){
		break;
	}
}
