let digito = Number(prompt("Digite un número"));

while (digito > 1) {
  if (digito % 2 == 0) {
    digito = digito / 2;
    document.write(digito);
    document.write("</br>");
  } else {
    digito = digito * 3 + 1;
    document.write(digito);
    document.write("</br>");
  }
}
