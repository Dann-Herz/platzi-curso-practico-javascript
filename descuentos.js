


function imprimirOferta() {
  const precioTotal = document.getElementById("precio").value;
  const descuento = document.getElementById("descuento").value;
  const cupon = document.getElementById("cupon").value;

  const precioConDescuento = (precioTotal / 100) * (100 - descuento);
  const precioConCupon = precioConDescuento - ((precioTotal / 100) * cupon);
  document.getElementById("oferta").innerHTML = `Your product with dicount is $${precioConCupon}`
}

