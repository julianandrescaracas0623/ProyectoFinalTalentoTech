
const contenedorTarjetas =  document.getElementById("productos-container");// Aca tendremos el codigo de nuestra pantalla principal de productos


function crearTarjetasProductosInicio(productos)
{
    productos.forEach(producto => {
        
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src="/ProyectoFinal/img Productos/${producto.id}.jpg"> 
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <h4>$${producto.precio}</h4>
            <button class="btn-agregar">Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoProducto);

    });
}

crearTarjetasProductosInicio(productos); // Llamamos a la funcion para que se ejecute