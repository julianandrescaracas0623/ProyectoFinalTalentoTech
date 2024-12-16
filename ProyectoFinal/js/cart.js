const contenedorTarjetas = document.getElementById("productos-container"); // Aca tendremos el codigo de nuestra pantalla principal de productos

function crearTarjetasProductosInicio() {
  contenedorTarjetas.innerHTML = ""; // Limpiamos el contenedor de productos  
  const productos = JSON.parse(localStorage.getItem("productos"));
  console.log(productos);
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      //Aca se muestra la imagen del producto en IMG pero tener cuidado ya que en ocaciones no se muestran las imagenes por la ruta
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
            <img src="/img Productos/${producto.id}.jpg">  
            <h3>${producto.nombre}</h3>
            <h4>$${producto.precio}</h4>
            <div>
                <button >-</button>
                <span class"cantidad">0</span>
                <button >+</button>
            </div>

        `;
      contenedorTarjetas.appendChild(nuevoProducto);
      contenedorTarjetas.lastChild.querySelectorAll("button")[1].addEventListener("click", () => agregarAlCarrito(producto));
      contenedorTarjetas.lastChild.querySelectorAll("button")[0].addEventListener("click", () => restarito(producto));
    });
  }
}

crearTarjetasProductosInicio(); // Llamamos a la funcion para que se ejecute
