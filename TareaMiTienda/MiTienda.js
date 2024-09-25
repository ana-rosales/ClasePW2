let carrito = [];
let seleccion;
let mensaje;
let total;

let productos = [
    {nombre: "Camisa",precio:300},
    {nombre: "Pantalon",precio:500},
    {nombre: "Zapatos",precio:800},
    {nombre: "Sombrero",precio:200},
];

do{
    seleccion = parseInt(prompt(`Seleccione un producto para agregarlo en el carrito:
        1. Camisa - $300.
        2. Pantalon - $500.
        3. Zapatos - $800.
        4. Sombrero - $200.
        5. Ver Carrito y Total.
        6. Salir.`))
    	
    if(seleccion >= 1 && seleccion <= 4){
        carrito.push(productos[seleccion-1]);
        alert("¡Producto agregado exitosamente!");
    }

    if(seleccion == 5){
        mensaje = "Carrito:\n";
        total = 0;
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}. ${producto.nombre} - $${producto.precio}.\n`;
            total += producto.precio;
        });
        mensaje += `Total: $${total}`;
        alert(mensaje);
    }

    if(seleccion < 1 || seleccion > 6){
        alert("Por favor, ingrese un número válido del menú.");
    }

}while(seleccion != 6);

