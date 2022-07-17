let sumatoria = 0

while(true){
	let prompt1 = Number(prompt ("Inserte un número"))
	sumatoria = sumatoria+1
	if (prompt1 == 0){
		break;
	}
}
document.write("El total de números ingresados fue: "+sumatoria)