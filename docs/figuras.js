//SECCIÓN DE CUADRADOS
console.group("Cuadrados");


function perimetroCuadrado(lado) {
  let perimetro = lado * 4
  return perimetro
}


function areaCuadrado(lado) {
  let area = lado * lado
  return area
}

//Esto limpia el cambas cuando modifiques la figura
function limpiar(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,1000,1000);
}


function calcularDatoDeCuadrado() {
  
  const input = document.getElementById("InputCuadrado");
  const value = input.value

  const perimetro = perimetroCuadrado(value);
  const area = areaCuadrado(value);

  const canvas = document.getElementById("canvas-cuadrado")
  if (canvas.getContext) {
    const limite = 130
    const tamaño = value;
    limpiar(canvas);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1565C0";
    if (tamaño >= limite) {
      ctx.fillRect (10, 10, limite, limite);
    } else {
      ctx.fillRect (10, 10, tamaño, tamaño);
    }
  } else {
    alert("No cuenta con getContext() integrado en el navegador, use un navegador más nuevo")
  }

  document.getElementById("resultado-cuadrado-perimetro").innerHTML = `El perimetro es de ${perimetro}`;
  document.getElementById("resultado-cuadrado-area").innerHTML = `El area es de ${area}`;
}

console.groupEnd();
 
//------------------------------------------------------------------------------------->>>

//SECCIÓN DE TRIANGULOS
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

//TEOREMA DEL COSENO APLICADA PARA OBTENER EL ANGULO EN GRADOS SEXAGESIMALES
function teoremaDelCoseno(a, b, c, ha) {
  const coordenadas = [];
  // const distanciax
  const cosA = (Math.acos(((b*b) + (c*c) - (a*a)) / (2*b*c))*180)/Math.PI;
  const cosB = (Math.acos(((a*a) + (c*c) - (b*b)) / (2*a*c))*180)/Math.PI;
  const cosC = (Math.acos(((b*b) + (a*a) - (c*c)) / (2*a*b))*180)/Math.PI;
  const suma = cosA + cosB + cosC;
  
  const anguloextra = 90 - cosB;
  const distancia = Math.sqrt((b*b) + (ha*ha) - ((2*b*ha) * Math.cos(anguloextra * Math.PI/180)));

  coordenadas[0] = cosA;
  coordenadas[1] = cosB;
  coordenadas[2] = cosC;
  coordenadas[3] = distancia;
  coordenadas[4] = suma;

  return coordenadas
}

//AQUI SE EJECUTAN LAS OTRAS FUNCIONES Y ACTUALIZA EL HTML
function datosTriangulo(a, b, c) {
  const ha = alturatriangulo(a, b, c);
  const perimetro = perimetroTriangulo (a, b, c);
  const area = areaTriangulo(a, b, c);
  const otrosDatos = teoremaDelCoseno(a, b, c, ha);
  otrosDatos[5] = ha
  // const distanciax = datos[0];
  document.getElementById("alturatriangulo").innerHTML = `La altura es de ${ha}`;
  document.getElementById("perimetrotriangulo").innerHTML = `El perimetro es de ${perimetro}`;
  document.getElementById("areatriangulo").innerHTML = `El area es de ${area}`;
  document.getElementById("angulo1").innerHTML = `El angulo 1 es de ${otrosDatos[0].toFixed(2)}`;
  document.getElementById("angulo2").innerHTML = `El angulo 2 es de ${otrosDatos[1].toFixed(2)}`;
  document.getElementById("angulo3").innerHTML = `El angulo 3 es de ${otrosDatos[2].toFixed(2)}`;
  document.getElementById("sumaAngulos").innerHTML = `Confirmando la validez de los datos, la suma de los angulos es ${otrosDatos[4].toFixed(2)}`;
  document.getElementById("mensaje").innerHTML = `Esto es con pixeles el triangulo que pusiste`;

  return otrosDatos
}

function eliminarTexto() {
  document.getElementById("alturatriangulo").innerHTML = null;
  document.getElementById("perimetrotriangulo").innerHTML = null;
  document.getElementById("areatriangulo").innerHTML = null;
  document.getElementById("angulo1").innerHTML = null;
  document.getElementById("angulo2").innerHTML = null;
  document.getElementById("angulo3").innerHTML = null;
  document.getElementById("sumaAngulos").innerHTML = null;
  document.getElementById("mensaje").innerHTML = `Abajo va a aparecer el tringulo graficado por pixeles cuando lo corrijas`;

}

//ESTE ES LA FUNCIÓN QUE ES LLAMADA CON EL "onchange" DEL HTML
function revisar() {
  //CREAMOS UN ARREGLO Y LO REORDENAMOS DE MAYOR A MENOR
  //NOS VA SERVIR PARA QUE EN TODO EL PROCESO FUNCIONEN LAS FORMULAS
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
    eliminarTexto();
  //CARACTERIZAMOS SI ES UN EQUILATERO Y EN SU CASO DAMOS RESULTADO
  } else if (a==b && b==c && c==a) {
    document.getElementById("demo").innerHTML = "Equilátero";
    const distanciayha = datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
    dibujartriangulo(parseFloat(a), parseFloat(distanciayha[5]), parseFloat(distanciayha[3]));
  //A PARTIR DE QUE NO ES EQUILATERO, PUEDEN EXISTIR TRIANGULOS IMPOSIBLES
  //ASI QUE COMPROBAMOS QUE NO SEA IMPOSIBLE
  } else if (parseFloat(a) >= (parseFloat(b) + parseFloat(c))) {
    document.getElementById("demo").innerHTML = "Uno de los lados es igual o mayor a la suma de los otros 2, no pueden existir triangulos así, ingrese uno real";
    eliminarTexto();
  //LUEGO DE COMPROBAR, VEMOS SI ES ISÓSCELES Y DAMOS RESULTADO
  } else if (a==b || b==c || c==a) {
    document.getElementById("demo").innerHTML = "Isósceles";
    const distanciayha = datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
    dibujartriangulo(parseFloat(a), parseFloat(distanciayha[5]), parseFloat(distanciayha[3]));
  //SI NO FUE ISOSCELES ENTONCES NO PUEDE SER OTRO QUE ESCALENO, Y DAMOS RESULTADO
  } else {
    document.getElementById("demo").innerHTML = "Escaleno";
    const distanciayha = datosTriangulo(parseFloat(a), parseFloat(b), parseFloat(c));
    dibujartriangulo(parseFloat(a), parseFloat(distanciayha[5]), parseFloat(distanciayha[3]));
  }

}

//ESTA ES LA FUNCIÓN PARA DIBUJAR EL TRIANGULO
function dibujartriangulo(a, ha, distancia) {
  const canvas = document.getElementById("canvas-triangulo")
  if (canvas.getContext) {
    limpiar(canvas);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1565C0";
    ctx.beginPath();
    ctx.moveTo(10,140);
    ctx.lineTo((10+a),140);
    ctx.lineTo((10+distancia),(140-ha));
    ctx.closePath();
    ctx.fill();
  } else {
    alert("No cuenta con getContext() integrado en el navegador, use un navegador más nuevo")
  }
}

console.groupEnd();

//------------------------------------------------------------------------------------->>>


//SECCIÓN DE CIRCULOS
console.group("Circulo");


function diametroCirculo(radio) {
  let diametro = radio * 2;
  return diametro;
}

var pi = Math.PI;
function circunferenciaCirculo(radio) {
  let diametro = diametroCirculo(radio)
  const circunferencia = diametro * pi
  return circunferencia
}

function areaCirculo(radio) {
  let area = pi * (radio * radio);
  return area
};

function darDatosDelCirculo() {
  const radio = document.getElementById("InputCirculo").value;
  const diametro = diametroCirculo(radio);
  const circunferencia = circunferenciaCirculo(radio);
  const area = areaCirculo(radio);

  dibujarcirculo(radio);

  document.getElementById("resultado-circulo-diametro").innerHTML = `El diametro es ${diametro}`;
  document.getElementById("resultado-circulo-perimetro").innerHTML = `La circunferencia es ${circunferencia.toFixed(2)}`;
  document.getElementById("resultado-circulo-area").innerHTML = `El área es ${area.toFixed(2)}`;
}


function dibujarcirculo(radio) {
  const canvas = document.getElementById("canvas-circulo")
  if (canvas.getContext) {
    limpiar(canvas);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1565C0";
    ctx.beginPath();
    ctx.arc(75,75,radio,0,Math.PI*2,true); // Círculo externo
    ctx.closePath();
    ctx.fill();
  } else {
    alert("No cuenta con getContext() integrado en el navegador, use un navegador más nuevo")
  }
}

console.groupEnd();

//---------------------------------------------------------------------------------->>>

//Pasar al siguiente botón con enter
document.getElementById('InputTriangular1').addEventListener('keydown', inputTriangular2);

function inputTriangular2(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('InputTriangular2').focus();
  } 

document.getElementById('InputTriangular2').addEventListener('keydown', inputTriangular3);

}
function inputTriangular3(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('InputTriangular3').focus();
  } 

}