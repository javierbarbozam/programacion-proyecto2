let prompt1 = prompt ("Inserte un número")
let n1 = parseInt(prompt1)
let resultado = 0
let i = 0

while(n1 > 1){
	if (n1 % 2 == 0){
		resultado = n1 / 2
	} else {
		resultado = (n1 * 3) + 1 
	}
}
document.write(sumatoria)