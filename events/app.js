const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", () => {
  console.log("Se realizo una compra.");
});

emisorProductos.emit("compra");

emisorProductos.on("compra", (total) => {
  console.log(`Se realizo una compra por $${total}.`);
});

emisorProductos.emit("compra", 500);

emisorProductos.on("compra", (total, numProductos) => {
  console.log(`Total de la compra: $${total}`);
  console.log(`Numero de productos: ${numProductos}`);
});

emisorProductos.emit("compra", 500, 5);
