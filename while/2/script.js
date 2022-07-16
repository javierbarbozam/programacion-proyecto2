let prompt1 = prompt ("Inserte un número")
let n1 = parseInt(prompt1)
let sumatoria = 0
let i = 0

while(i < n1){
	if (i % 2 == 0){
		sumatoria = sumatoria + i
	}
	i++
}
document.write(sumatoria)