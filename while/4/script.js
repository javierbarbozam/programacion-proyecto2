let notas = [];

while (true) {
	let numero = Number(prompt("Digite un número"))
	notas.push(numero);
	if (notas.length == 3) {
			break;
	}
}
let promedio1 = notas[0] * 33.3 / 100
let promedio2 = notas[1] * 33.3 / 100
let promedio3 = notas[2] * 33.3 / 100
let promediofinal = promedio1 + promedio2 + promedio3

document.write("El promedio final es: " + promediofinal)