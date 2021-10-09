// HELPERS  

function espar(numero) {
  return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const suma = lista.reduce(
    function(acumulado = 0, nuevoElemento) {
      return acumulado + nuevoElemento;
    }
  )
  const promediolista = suma/lista.length;
  return promediolista;
};
//CALCULADORA MEDIANA

function mediaSalarios(lista) {
  const medio = parseInt(lista.length / 2)

  if(espar(lista.length)) {
    const medio1 = lista[medio -1];
    const medio2 = lista[medio];
    const mediana = calcularMediaAritmetica([medio1, medio2])
    return mediana;
  } else {
    const personitaMitad = lista[medio];
    return personitaMitad;
  }
}



//MEDIANA GENERAL

const salariosMex = Mexico.map(
  function (persona) {
    return persona.salary
  }
)

const salariosMexSort = salariosMex.sort(
  function(salarioA, salarioB) {
    return salarioA - salarioB;
  }
)

const medianaGeneralMexico = mediaSalarios(salariosMexSort);  

//MEDIANA 10%

const spliceStart = parseInt((salariosMexSort.length/100) * 90);
const spliceSpace = salariosMexSort.length - spliceStart;

const salarios10TopMex = salariosMexSort.splice(spliceStart, spliceSpace);

const medianaTopMexico = mediaSalarios(salarios10TopMex);  


console.log({
  medianaGeneralMexico,
  medianaTopMexico,
});