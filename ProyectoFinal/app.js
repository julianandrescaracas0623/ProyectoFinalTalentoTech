// Variables
const botonCarrito = document.querySelector("#boton-carrito"); // Botón del carrito
const carritoDesplegable = document.querySelector("#carrito-desplegable"); // Contenedor del carrito

// Evento para mostrar/ocultar el carrito
botonCarrito.addEventListener("click", function () {
    // Alterna la clase "visible" para desplegar o ocultar el carrito
    carritoDesplegable.classList.toggle("visible");
});

// Variables para el carrito
const carrito = [];
let total = 0;

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.querySelector("#lista-carrito");
    const totalCarrito = document.querySelector("#total-carrito");
    
    // Limpiar la lista del carrito
    listaCarrito.innerHTML = "";

    // Mostrar los productos en el carrito
    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}.00`;

        // Botón para eliminar producto del carrito
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
        btnEliminar.addEventListener("click", function () {
            eliminarProducto(index);
        });

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    // Redondear el total para evitar problemas de decimales
    total = Math.round(total * 100) / 100;

    // Actualizar el total en la interfaz
    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para agregar productos al carrito
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("btn-outline-primary")) {
        const producto = e.target.closest(".card-body");
        const nombre = producto.querySelector(".card-title").textContent;
        const precioTexto = producto.querySelector(".precio").textContent;
        const precio = parseFloat(precioTexto.replace("$", "").replace(".", ""));

        // Agregar producto al carrito
        carrito.push({ nombre, precio });
        total += precio; // Aumenta el total
        actualizarCarrito(); // Actualiza el carrito con el nuevo producto
    }
});

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1); // Eliminar producto del carrito
    actualizarCarrito(); // Vuelve a actualizar el carrito
}
