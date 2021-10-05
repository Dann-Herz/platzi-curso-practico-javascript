const lista1 = [
  100,
  200,
  300, 
  500
]


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
return promediolista
}


