function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem('productos'));
    console.log(memoria);
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem('productos', JSON.stringify([nuevoProducto]));
    } else {
        const indiceProductos = memoria.findIndex(productos => productos.id === producto.id);
        console.log(indiceProductos);
        if (indiceProductos === -1) {
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            localStorage.setItem('productos', JSON.stringify(nuevaMemoria));
        } else {
            let nuevaMemoria = memoria; // Declara correctamente la variable aquí
            nuevaMemoria[indiceProductos].cantidad++;
            localStorage.setItem('productos', JSON.stringify(nuevaMemoria));
        }
    }
    actualizarNumeroCarrito();
}

/* Con esta funcion tomamos un prducto, le agregamos la cantidad 1 y esta lo devuelve */
function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById('contador');
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem('productos'));
    const cuenta = memoria.reduce((total, producto) => total + producto.cantidad, 0);
    cuentaCarritoElement.innerHTML = cuenta;
}

// actualizarNumeroCarrito(); // Llamamos a la funcion para que se ejecute