let numero = Number(prompt("Digite un número del 1 al 10"))
let resultado=0

for (let i = 1; i <=10; i++){
	resultado= i*numero
	document.write(resultado)
	document.write("<br>")
}

/*
let listadenumero = [];
for (let i = 0; i <= 10; i++) {
  listadenumero.push(i);
}
for (let i = 0; i < listadenumero.length; i++) {
  if (i % 2 == 0) {
    document.writeln(`numero: ${listadenumero[i]}`);
    document.write("</br>");
  }
}

----------------------------------

let numero = prompt("Ingrese un número de 6 digitos");
let contador = 0;
let ultimacifra = numero % 10;

for (let i = 0; i <= parseInt(numero); i++) {
  if (i % 10 == numero % 10) {
    contador = contador + 1;
  }
}
document.write(contador);

-----------------------------------

let finDeCiclo = 10;
let sumatoria = 0;

for (let i = 0; i < finDeCiclo; i++) {
	 if (i % 2 == 0){
			 sumatoria = sumatoria + i
	 }
}
document.write(sumatoria)
*/

