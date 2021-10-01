
const coupons = [
  {
    name: "este-es-el-codigo",
    value: 15
  },
  {
    name: "otrocodigo",
    value: 20
  },
  {
    name: "último-código",
    value: 30
  }
] 

// const coupon = "este-es-el-codigo";

// const validador = function(coupons) {
//   return coupons.name === coupon
// }

// const opcion = coupons.find(validador)
// console.log(opcion);
// //Dato interesante, no sabía usar array.find() que se usa para objetos,
// //pero curiosamente recibe una función, de la forma que está arriba, pero
// //no otros estilos de funcion, y la función recibe en automatico "coupons" 
// //el array del que fue declarado, lo más curioso es que devuelve en "opcion" 
// //el array que en el que se cuentra "coupon"



function imprimirOferta() {
  const precioTotal = document.getElementById("precio").value;
  const descuento = document.getElementById("descuento").value;
  const cupon = document.getElementById("Cupon").value;


  if (cupon == 0) {
    const precioConDescuento = (precioTotal / 100) * (100 - descuento);
    document.getElementById("oferta").innerHTML = `Your product with dicount is $${precioConDescuento}`
  } else {
    const validador = function(coupons) {
      return coupons.name == cupon
    }
  
    const datos = coupons.find(validador);
  
    if(!datos) {
      document.getElementById("oferta").innerHTML = `Your code ${cupon} is not correct, check it again`
    } else {
      const precioConDescuento = (precioTotal / 100) * (100 - descuento);
      const precioConCupon = precioConDescuento - ((precioTotal / 100) * datos.value);
      document.getElementById("oferta").innerHTML = `Your product with dicount is $${precioConCupon.toFixed(2)}`
    }
  
  }
}

document.getElementById("precio").addEventListener("keydown", enterdescuento)

function enterdescuento(event) {
  if (event.keyCode == 13) {
    document.getElementById("descuento").focus()
  }

}

document.getElementById("descuento").addEventListener("keydown", entercupon )

function entercupon(event) {
  if(event.keyCode == 13) {
    document.getElementById("Cupon").focus()
  }
}

document.getElementById("Cupon").addEventListener("keydown", enterbutton )

function enterbutton(event) {
  if(event.keyCode == 13) {
    document.getElementById("button").focus()
    imprimirOferta()
  }
}

