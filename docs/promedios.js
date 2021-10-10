
function convertirArrayaNumber(string) {

  const arreglo = string.split(",");
  const ArrayenNumero = arreglo.map(function(x) {
    return parseInt(x);
  })
  const arrayFiltrado = ArrayenNumero.filter(Boolean);
  return arrayFiltrado

}


const objeto1 = [
  [2,2,3,2,2,1,1,2,4,5,5,5,5,5,5,5,5,9],
  [2,2,2,2,21,4,4,34,53,53,43,34,5,3,43,2,5,65,7,7,57,8,4],
  [23,3,24,3,44,5,466,576,768,7,5,6,54,3,4,7,6,8,88,4,5,3,23,1],
  [2,2,2,3,34,5,5,6,4,6,6,6,5,7,5,3,4,6,7,88,8,7,6,7,8,9,88,8],
]

//CREA LA LISTA CUANDO SE EJECUTA EL BOTÓN "¡Crear Lista!"
function crearLista() {
  const string = document.getElementById("crear-lista__input").value
  const arrayfiltrado = convertirArrayaNumber(string)
  objeto1.push(arrayfiltrado);
  console.log(objeto1);
  crearElemento(arrayfiltrado, (objeto1.length-1));
}

function crearListaAlAzar() {
  const arrayNuevo = []
  let nuevoNumero = 0
  for(i=0;i<20;i++) {
    nuevoNumero = Math.floor(Math.random() * 115)
    arrayNuevo.push(nuevoNumero);
  }
  objeto1.push(arrayNuevo);
  crearElemento(arrayNuevo, (objeto1.length-1));
}

//CREAR EL ELEMENTO HTML DEL NUEVO ARRAY PARA PODER SELECCIONARLO
function crearElemento(arrayNuevo, index) {
  const nuevoElemento = document.createElement("div");
  nuevoElemento.innerHTML = `${arrayNuevo}`;
  nuevoElemento.setAttribute("class", "listas-cuadricula__elemento");
  nuevoElemento.setAttribute("onclick", `tomadorDeDecisión(${index})`);

  const elementoPadre = document.getElementById("Primer-elemento").parentNode;
  const primerElemento = document.getElementById("Primer-elemento");

  elementoPadre.insertBefore(nuevoElemento, primerElemento);
}





//TOMA LA DECISIÓN DE QUE ARRAY SE VA A OBTENER LOS DATOS
function tomadorDeDecisión(array) {
  // const array = document.getElementById("array").value
  const index = parseInt(array);
  obtenerPromedios(objeto1[index]);
 }



function obtenerPromedios(listaNumeros) {
  listaNumeros.sort(
    function(a, b) {
      return a - b
    }
  )

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

    document.getElementById("lista-h2").innerHTML = `Números reordenados`
    document.getElementById("lista").innerHTML = `La lista re-ordenada es ${lista}`;
    document.getElementById("lista").setAttribute("class", "resultados-p");


    document.getElementById("media-aritmetica-h2").innerHTML = `Media Aritmética`;
    document.getElementById("media-aritmetica-p").innerHTML = `Esta es una de las más usadas y mayor mente conocida como
    promedio en general, su formula es simple, se suman todos los número de una lista y se divide entre la cantidad de 
    elementos que esta contiene. <br><br> Ejemplo: para 3,4,5 la media es igual a  (3+4+5)/3 = 4`;
    
    const img = document.getElementById("media-aritmetica-img");
    img.setAttribute("src", "./img/media-aritmetica.png")
    document.getElementById("media-aritmetica").innerHTML = `El promedio o media aritmética es ${promediolista.toFixed(2)}`
    document.getElementById("media-aritmetica").setAttribute("class", "resultados-p");
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
  function imprimirMediana(mediana) {
    document.getElementById("mediana-h2").innerHTML = "Mediana"
    document.getElementById("mediana-p").innerHTML = `La mediana en el ámbito de la estadistica 
    representa el valor central de un conjunto de datos ordenados <br><br> Ejemplo: para 7, 8, 9, 10, 11, 12 la
    mediana = 9,5 = (9+10)/2 <br><br> Usualmente su uso se da cuando necesitamos un dato central en
    un conjunto de datos, pero queremos que sea consistente con los datos dentro o verdaderos registrados.`;
    document.getElementById("mediana-img").setAttribute("src", "./img/mediana.png");
    document.getElementById("mediana").innerHTML = `La mediana es ${mediana.toFixed(2)}`;
    document.getElementById("mediana").setAttribute("class", "resultados-p");
  }
  const mitadLista =   parseInt(lista.length/2);
  if(espar(lista.length)) {
    const ordenada = lista.sort(function(a, b){return a - b});
    const elemento1 = ordenada[mitadLista-1];
    const elemento2 = ordenada[mitadLista ];
  
    let mediana = (elemento1 + elemento2) / 2
    imprimirMediana(mediana);
  } else {
    let mediana = lista[mitadLista];
    imprimirMediana(mediana);
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


  document.getElementById("moda-h2").innerHTML = "Moda"
  document.getElementById("moda-p").innerHTML = `En estadística la moda es el valor que aparece con
  mayor frecuencia en un conjunto de datos <br><br> Ejemplo: para 6, 8, 9, 9, 11, 12, 9, 12 -->>
  Moda = 9  ya que es la que más se repite <br><br> Usualmente su uso se enfoca más en variables cualitativas, como 
  cuando se enumeran en medios periodísticos las características más frecuentes de determinado sector social.`;
  document.getElementById("moda-img").setAttribute("src", "./img/moda.png");
  document.getElementById("moda").innerHTML = `La moda de la lista es el ${moda[0]} que se repite ${moda[1]} veces`
  document.getElementById("moda").setAttribute("class", "resultados-p");
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

  document.getElementById("media-geometrica-h2").innerHTML = "Media Geométrica"
  document.getElementById("media-geometrica-p").innerHTML = `La media geométrica de una cantidad arbitraria de 
  números (por decir n números) es la raíz n-ésima del producto de todos los números; <br><br> Ejemplo: 
  para 2,18 la media geometrica sería igual a la raiz cuadrada de (2*18) = 6 <br><br> Es recomendada para datos 
  de progresión geométrica, para promediar razones, interés compuesto y números índice. `;
  document.getElementById("media-geometrica-img").setAttribute("src", "./img/media-geometrica.png");
  document.getElementById("media-geometrica").innerHTML = `La media geométrica es ${mediageometrica.toFixed(2)}`;
  document.getElementById("media-geometrica").setAttribute("class", "resultados-p");
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

  document.getElementById("media-armonica-h2").innerHTML = "Media Armónica"
  document.getElementById("media-armonica-p").innerHTML = `La media armónica (designada usualmente mediante H o HM) 
  de una cantidad finita de números es igual al recíproco, o inverso, de la media aritmética de los recíprocos
   de dichos valores <br><br> Ejemplo: 
  para 2,4,6 la media armónica sería 3 / ((1/2)+(1/4)+(1/6)) = 1.24 <br><br> Es recomendada para promediar velocidades,
  particularmente resulta poco influida por la existencia de determinados valores mucho más grandes que el conjunto de 
  los otros, siendo en cambio sensible a valores mucho más pequeños que el conjunto.`;
  document.getElementById("media-armonica-img").setAttribute("src", "./img/media-armonica.png");
  document.getElementById("media-armonica").innerHTML = `La media armónica es ${mediaarmonica.toFixed(2)}`;
  document.getElementById("media-armonica").setAttribute("class", "resultados-p");
}

//----------------------------------------------------------------------->>>
//MEDIO RANGO

function medioRango(lista) {

      const ordenado = lista.sort(
        function(a, b) {
          return a - b
        }
      )




  const mediorango = (ordenado[0] + ordenado[ordenado.length - 1])/2;


  document.getElementById("medio-rango-h2").innerHTML = "Medio rango o Rango medio"
  document.getElementById("medio-rango-p").innerHTML = `El medio rango o rango medio de un conjunto de valores 
  numéricos, es la media del menor y mayor valor, o la mitad del camino entre el dato de menor valor y 
  el dato de mayor. <br><br> Ejemplo: para 2,4,6, 15, 19 es (2+19)/2 = 10.5 `;
  document.getElementById("medio-rango-img").setAttribute("src", "./img/rango-medio.png");
  document.getElementById("medio-rango").innerHTML = `El medio rango es ${mediorango.toFixed(2)}`;
  document.getElementById("medio-rango").setAttribute("class", "resultados-p");
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

  document.getElementById("media-cuadratica-h2").innerHTML = "Media cuadrática"
  document.getElementById("media-cuadratica-p").innerHTML = `El nombre deriva del hecho de que 
  es la raíz cuadrada de la media aritmética de los cuadrados de los valores.
   <br><br> Ejemplo: para 2,4,6 es raíz cuadrada de ((2*2)+(4*4)+(6*6))/3 = 4.24 `;
  document.getElementById("media-cuadratica-img").setAttribute("src", "./img/media-cuadratica.png");
  document.getElementById("media-cuadratica").innerHTML = `La media cuadrática es de ${promediolista.toFixed(2)}`
  document.getElementById("media-cuadratica").setAttribute("class", "resultados-p");
}