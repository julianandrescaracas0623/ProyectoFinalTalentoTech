const contenedorTarjetas =  document.getElementById("productos-container");// Aca tendremos el codigo de nuestra pantalla principal de productos

function crearTarjetasProductosInicio(productos)
{
    productos.forEach(producto => {
        
        //Aca se muestra la imagen del producto en IMG pero tener cuidado ya que en ocaciones no se muestran las imagenes por la ruta 
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src="../img Productos/${producto.id}.jpg">  
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <h4>$${producto.precio}</h4>
            <button class="btn-agregar">Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoProducto);
        contenedorTarjetas.lastChild.querySelector(".btn-agregar").addEventListener("click", () => agregarAlCarrito(producto));

    });
}

crearTarjetasProductosInicio(productos); // Llamamos a la funcion para que se ejecute