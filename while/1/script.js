let prompt1 = prompt ("Inserte un número")
let prompt2 = prompt ("Inserte un segundo número")
let n1 = parseInt(prompt1)
let n2 = parseInt(prompt2)


while(n1 > n2){
	n2 = n2+1
	document.write(n2)
}
while(n1 < n2){
	n1 = n1+1
	document.write(n1)
}