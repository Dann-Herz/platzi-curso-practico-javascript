console.group("Cuadrados");
//Código del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm cuadrados");
console.groupEnd();

console.group("Triangulos");
//Código del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden " + ladoTriangulo1 + ", " + ladoTriangulo1 + " y " + baseTriangulo + "cm");
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide: " + areaTriangulo + "cm cuadrados");

console.groupEnd();

console.group("Circulo");
//Código del Circulo
var radio = 4;
var diametro = radio * 2;
var pi = Math.PI;
var circunferencia = diametro * pi;
var areaCirculo = pi * (radio * radio);

console.log("El radio del circulo mide: " + radio + "cm");
console.log("El diametro del circulo mide: " + diametro + "cm");
console.log("PI es: " + pi);
console.log("La cicunferencia del circulo mide: " + circunferencia + "cm");
console.log("El área del circulo mide: " + areaCirculo + "cm cuadrados");

console.groupEnd();