
function convertirArrayaNumber(string) {

  const arreglo = string.split(",");
  const ArrayenNumero = arreglo.map(function(x) {
    return parseInt(x);
  })
  const arrayFiltrado = ArrayenNumero.filter(Boolean);
  return arrayFiltrado

}
console.log(convertirArrayaNumber(stringdealgo));

const objeto1 = [
  [2,2,3,2,2,1,1,2,4,5,5,5,5,5,5,5,5,9],
  [2,2,2,2,21,4,4,34,53,53,43,34,5,3,43,2,5,65,7,7,57,8,4],
  [23,3,24,3,44,5,466,576,768,7,5,6,54,3,4,7,6,8,88,4,5,3,23,1,7,7,6,5,4,3,46,2],
  [2,2,2,3,34,5,5,6,4,6,6,6,5,7,5,3,4,6,7,88,8,7,6,7,8,9,88,8,],
]

//CREA LA LISTA CUANDO SE EJECUTA EL BOTÓN "¡Crear Lista!"
function crearLista() {
  const string = document.getElementById("crear-lista__input").value
  const arrayfiltrado = convertirArrayaNumber(string)
  objeto1.push(arrayfiltrado);
  console.log(objeto1);
}













//TOMA LA DECISIÓN DE QUE ARRAY SE VA A OBTENER LOS DATOS
function tomadorDeDecisión() {
  const array = document.getElementById("array").value
  const index = parseInt(array);
  obtenerPromedios(objeto1[index]);
 }



function obtenerPromedios(listaNumeros) {
  calcularMediaAritmetica(listaNumeros);
  mediana(listaNumeros);
  obtenerModa(listaNumeros);
  mediaGeometrica(listaNumeros);
  mediaArmonica(listaNumeros);
  medioRango(listaNumeros);
  mediaCuadratica(listaNumeros)
}

//----------------------------------------------------------------------->>>
//MEDIA ARITMETICA O "PROMEDIO" 
function calcularMediaAritmetica(lista) {
    // let sumalista = 0;

    // for(i=0; i<lista.length; i++) {
    //   sumalista = sumalista + lista[i];
    //   console.log(sumalista);
    // }

    const sumalista = lista.reduce(
      function(valorAcumulado = 0, elementoNuevo) {
        return valorAcumulado + elementoNuevo
      }

    
    )

    const promediolista = sumalista / lista.length
    // console.log(promediolista);
    document.getElementById("lista").innerHTML = `La lista es ${lista}`
    document.getElementById("media-aritmetica").innerHTML = `El promedio o media aritmética es ${promediolista.toFixed(2)}`

}

//----------------------------------------------------------------------->>>
//MEDIANA


function mediana(lista) {
  
  const espar = (numero) => {
    if(numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const mitadLista =   parseInt(lista.length/2);
  if(espar(lista.length)) {
    const ordenada = lista.sort(function(a, b){return a - b});
    const elemento1 = ordenada[mitadLista-1];
    const elemento2 = ordenada[mitadLista ];
  
    let mediana = (elemento1 + elemento2) / 2
    document.getElementById("mediana").innerHTML = `La mediana es ${mediana.toFixed(2)}`
  } else {
    let mediana = lista[mitadLista];
    document.getElementById("mediana").innerHTML = `La mediana es ${mediana.toFixed(2)}`
  }
}


//----------------------------------------------------------------------->>>
//MODA
function obtenerModa(lista) {
  const listaCount = {};

  lista.map(
    function(elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1
      } else {
        listaCount[elemento] = 1
      }
    }
  )

  const listaCountOrdenada = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1]; 
    }
  )

  const moda = listaCountOrdenada[listaCountOrdenada.length - 1]
  document.getElementById("moda").innerHTML = `La moda de la lista es el ${moda[0]} que se repite ${moda[1]}`

}

//----------------------------------------------------------------------->>>
//MEDIA GEOMÉTRICA

function mediaGeometrica(lista) {
  const acumulado = lista.reduce(
    function(elementAcumulado = 0, elementNuevo) {
      return elementAcumulado * elementNuevo
    }
  )

  const mediageometrica = Math.pow(acumulado, 1/lista.length);
  document.getElementById("media-geometrica").innerHTML = `La media geométrica es ${mediageometrica.toFixed(2)}`;
}


//----------------------------------------------------------------------->>>
//MEDIA ARMÓNICA

function mediaArmonica(lista) {
  const acumulado = lista.reduce(
    function(elementAcumulado = 0, elementNuevo) {
      return elementAcumulado + (1/elementNuevo)
    }
  )

  const mediaarmonica = lista.length/acumulado;
  document.getElementById("media-armonica").innerHTML = `La media armónica es ${mediaarmonica.toFixed(2)}`;
}

//----------------------------------------------------------------------->>>
//MEDIA RANGO

function medioRango(lista) {
  const ordenado = lista.sort(
    function(a, b) {
      return a - b
    }
  )

  const mediorango = (ordenado[0] + ordenado[ordenado.length - 1])/2;
  document.getElementById("medio-rango").innerHTML = `El medio rango es ${mediorango.toFixed(2)}`;
}

//----------------------------------------------------------------------->>>
//MEDIA CUADRÁTICA

function mediaCuadratica(lista) {

  const sumalista = lista.reduce(
    function(valorAcumulado = 0, elementoNuevo) {
      return valorAcumulado + (elementoNuevo * elementoNuevo)
    }
  )

  const promediolista = Math.sqrt(sumalista / lista.length);
  document.getElementById("media-cuadratica").innerHTML = `La media cuadrática es de ${promediolista.toFixed(2)}`

}