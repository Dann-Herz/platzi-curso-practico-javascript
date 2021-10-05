const lista1 = [
  100,
  200,
  300,  
  600,
  200,
  400000000

]
 


function espar(numero) {
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function mediana(lista) {
  const mitadLista =   parseInt(lista.length/2);
  if(espar(lista.length)) {
    const ordenada = lista.sort(function(a, b){return a - b});
    const elemento1 = ordenada[mitadLista-1];
    const elemento2 = ordenada[mitadLista ];
  
    let mediana = (elemento1 + elemento2) / 2
    console.log(mediana);
  } else {
    let mediana = lista[mitadLista];
    console.log(mediana);
  }
}

