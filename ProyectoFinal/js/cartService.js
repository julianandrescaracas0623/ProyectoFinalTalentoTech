
function agregarAlCarrito(producto){

   // const memoria = localStorage.getItem('productos') || '[]';
      const memoria =JSON.parse(localStorage.getItem('productos'));
    console.log(memoria);

    if(!memoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem('productos', JSON.stringify([nuevoProducto]));
    }else
    {
        const indiceProductos = memoria.findIndex(productos => productos.id === producto.id);
        console.log(indiceProductos);
    }
}