function numbers(entrada: string, campo: string): boolean {
   console.log(entrada,campo)
  if (
    campo == "Marca" ||
    campo == "Precio" ||
    campo == "Tipo" ||
    campo == "Cantidad" ||
    campo == "Modelo" ||
    campo == "Capacidad" ||
    campo == "Generacion" ||
    campo == "Velocidad" ||
    campo == "Proveedor" ||
    campo == "Compra" || 
    campo == 'Numero de telefono' || 
    campo == 'Telefono-Proveedor' || 
    campo == "Precio-Combo" ||
    campo == "Cantidad-Combo"
  ) {
   const regexNumero = /^-?\d+(\.\d+)?$/;
   console.log(regexNumero)
   return regexNumero.test(entrada);
  }
  return false
}

export default numbers;
