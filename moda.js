const lista1 = [
  2,
  2, 
  3, 
  2, 
  2, 
  1, 
  1, 
  2, 
  4, 
  5, 
  5, 
  5, 
  5, 
  5, 
  5, 
  5, 
  5, 
  9
];


const lista2 = [
  2,
  2, 
  3, 
  2, 
  2, 
  1, 
  1, 
  10, 
  4, 
  5, 
  13, 
  13, 
  5, 
  5, 
  14, 
  5, 
  5, 
  9, 
  12, 
  25,
  34, 
];

const lista3 = [
  2,
  2, 
  3, 
  1, 
  0, 
  4, 
  5, 
  3, 
  13, 
  5, 
  14, 
  9, 
  12, 
  25,
  4,
  11,
  90, 
  90,
  90,
  90,
  1234, 
  3,
  5
];

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
  console.log(moda);
}



