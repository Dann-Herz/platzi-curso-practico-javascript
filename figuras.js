//Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
  let perimetro = lado * 4
  return perimetro
}


function areaCuadrado(lado) {
  let area = lado * lado
  return area
}

console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, lado3) {
  let perimetro = lado1 + lado2 + lado3;
  return perimetro;
};

function alturatriangulo(a, b, c) {
  const s = (a + b + c)/2;
  const area = Math.sqrt(s*(s- a)*(s-b)*(s-c))
  const ha = (2 * area)/a
  return ha.toFixed(3)
}

//FÓRMULA DE HERÓN PARA AREA
function areaTriangulo(a, b, c) {
  const s = (a + b + c)/2;
  const area = Math.sqrt(s*(s- a)*(s-b)*(s-c));
  return area.toFixed(3);
};

//AQUI SE EJECUTAN LAS OTRAS FUNCIONES Y ACTUALIZA EL HTML
function datosTriangulo(a, b, c) {
  const ha = alturatriangulo(a, b, c);
  const perimetro = perimetroTriangulo (a, b, c);
  const area = areaTriangulo(a, b, c);
  document.getElementById("alturatriangulo").innerHTML = `La altura es de ${ha}`;
  document.getElementById("perimetrotriangulo").innerHTML = `El perimetro es de ${perimetro}`;
  document.getElementById("areatriangulo").innerHTML = `El area es de ${area}`;
}

//ESTE ES LA FUNCIÓN QUE ES LLAMADA CON EL "onchange" DEL HTML
function revisar() {
  //CREAMOS UN ARREGLO Y LO REORDENAMOS DE MAYOR A MENOR
  //NOS VA SERVIR PARA TODO EL PROCESO
  const arreglo = [];

  arreglo[0] = document.getElementById("InputTriangular1").value;
  arreglo[1] = document.getElementById("InputTriangular2").value;
  arreglo[2] = document.getElementById("InputTriangular3").value;
  arreglo.sort(function(a, b){return b - a});

  //LO ASIGNAMOS A VARIABLES PARA NOMBRARLAS MÁS FÁCIL
  const a = arreglo[0];
  const b = arreglo[1];
  const c = arreglo[2];
  //REVISAMOS QUE NO HAYA VALORES NULOS O CEROS
  if (a==0 || b==0 || c==0 || a==null || b==null || c==null) {
    document.getElementById("demo").innerHTML = "No existen triangulos con un lado de 0, coloque el resto";
    document.getElementById("alturatriangulo").innerHTML = null;
    document.getElementById("perimetrotriangulo").innerHTML = null;
    document.getElementById("areatriangulo").innerHTML = null;
  //CARACTERIZAMOS SI ES UN EQUILATERO Y EN SU CASO DAMOS RESULTADO
  } else if (a==b && b==c && c==a) {
    document.getElementById("demo").innerHTML = "Equilátero";
    datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
  //A PARTIR DE QUE NO ES EQUILATERO, PUEDEN EXISTIR TRIANGULOS IMPOSIBLES
  //ASI QUE COMPROBAMOS QUE NO SEA IMPOSIBLE
  } else if (parseFloat(a) >= (parseFloat(b) + parseFloat(c))) {
    document.getElementById("demo").innerHTML = "Uno de los lados es igual o mayor a la suma de los otros 2, no pueden existir triangulos así, ingrese uno real";
    document.getElementById("alturatriangulo").innerHTML = null;
    document.getElementById("perimetrotriangulo").innerHTML = null;
    document.getElementById("areatriangulo").innerHTML = null;
  //LUEGO DE COMPROBAR, VEMOS SI ES ISÓSCELES Y DAMOS RESULTADO
  } else if (a==b || b==c || c==a) {
    document.getElementById("demo").innerHTML = "Isósceles";
    datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
  //SI NO FUE ISOSCELES ENTONCES NO PUEDE SER OTRO QUE ESCALENO, Y DAMOS RESULTADO
  } else {
    document.getElementById("demo").innerHTML = "Escaleno";
    datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
  }
}

console.groupEnd();


//Código del Circulo
console.group("Circulo");

var radio = 4;
function diametroCirculo(radio) {
  let diametro = radio * 2;
  return diametro;
}

var pi = Math.PI;
function circunferencia(radio) {
  let diametro = diametroCirculo(radio)
  circuferencia = diametro * pi
  return circunferencia
}

function areaCirculo(radio) {
  let area = pi * (radio * radio);
  return area
};


console.groupEnd();

//Aqui interactuamos con el html
function calcularPermetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value

  const area = areaCuadrado(value);
  alert(area);
}