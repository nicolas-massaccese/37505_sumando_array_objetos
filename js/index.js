
function agregarACarrito(){

    const productosCarrito = []
    let productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
    
    do{
        const nuevoProducto = new Producto()
        switch(productos){
        case 1:
            console.log('sumaste una Mochila al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Mochila'
            nuevoProducto.precio = 15000
            break;
        case 2:
            console.log('sumaste un Bolso al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Bolso'
            nuevoProducto.precio = 10000
            break;
        case 3:
            console.log('sumaste un Accesorio al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Accesorio'
            nuevoProducto.precio = 5000
            break;
        default:
            alert("Por favor seleccione alguna de las opciones indicadas");
            productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            break
        }
        if (productos > 0 && productos < 4){
            productosCarrito.push(nuevoProducto)
        }
    }while (productos !=0)

    return productosCarrito
}

function mostrarTotal(valorFinal){

    console.log('Su compra ah sido realizada. El valor final es de '+valorFinal)

}

function calcularTotalCarrito(productosCarrito){
    let total = 0
    for(let i=0; i < productosCarrito.length ; i++){
        total += productosCarrito[i].precio
    }
    return total
}

const productosComprados = agregarACarrito()
let total = calcularTotalCarrito(productosComprados)

mostrarTotal(total)

function Producto(tipo, precio){

    this.tipo = tipo
    this.precio = precio
}
