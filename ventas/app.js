const fs = require("fs"); 
fs.readFile("ventas.txt", "utf8", (error, datos) => {
  if (error) {
    console.error("Se ha generado un error al leer el archivo");
  } else {
    const compradores = datos.split("\n"); 
    let total = 0;
    console.log("- - - - - - - - - - - - - - -");
    console.log("VENTAS DEL DÍA");
    console.log("- - - - - - - - - - - - - - -");
    console.log("Miguel Santos");
    console.log("- - - - - - - - - - - - - - -");
    compradores.forEach((comprador) => {
      const compra = comprador.split(",");
      const cantidad = parseInt(compra[1]);
      const precio = parseFloat(compra[2]);
      total = total + cantidad * precio; 
      console.log(`${cantidad}  ${compra[0]} ... ${precio}`);
    });  
    console.log("- - - - - - - - - - - - - - -");
    console.log(`VENTA TOTAL  $${total.toFixed(2)}`);   
    console.log("- - - - - - - - - - - - - - -");
  }
});