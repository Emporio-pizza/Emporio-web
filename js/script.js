
// =====================================
// ELEMENTOS DEL HTML
// =====================================

const contenedorCategorias = document.getElementById("categorias-menu");
const contenedorProductos = document.getElementById("productos-menu");


// =====================================
// FUNCIONES AUXILIARES
// =====================================

// Evita que caracteres especiales rompan el HTML.
function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caracter]);
}


// Convierte un precio en formato de moneda.
function formatoPrecio(precio) {
    return `$${Number(precio).toFixed(2)}`;
}


// =====================================
// MOSTRAR PRECIOS
// =====================================

function mostrarPrecios(producto) {

    let html = "";

    // Productos con precios por tamaño.
    if (producto.precios) {

        html += '<div class="lista-precios">';

        for (const [tamano, precio] of Object.entries(producto.precios)) {
            html += `
                <div class="precio-item">
                    <span>${escaparHTML(tamano)}</span>
                    <strong>${formatoPrecio(precio)}</strong>
                </div>
            `;
        }

        html += "</div>";

    }

    // Promoción de dos pizzas.
    if (producto.preciosDos) {

        html += '<div class="promocion-dos">';

        html += "<p>Promoción de 2 pizzas</p>";

        for (const [tamano, precio] of Object.entries(producto.preciosDos)) {
            html += `
                <div class="precio-item">
                    <span>${escaparHTML(tamano)}</span>
                    <strong>${formatoPrecio(precio)}</strong>
                </div>
            `;
        }

        html += "</div>";
    }

    // Productos con precio único.
    if (producto.precio !== undefined) {
        html += `
            <div class="precio-unico">
                <strong>${formatoPrecio(producto.precio)}</strong>
            </div>
        `;
    }

    // Aviso cuando todavía falta confirmar el precio.
    if (!producto.precios && !producto.precio && !producto.preciosDos) {
        html += '<p class="precio-pendiente">Precio por confirmar</p>';
    }

    return html;
}


// =====================================
// MOSTRAR PRODUCTOS
// =====================================

function mostrarProductos(categoriaSeleccionada = "Todos") {

    contenedorProductos.innerHTML = "";

    const productosFiltrados = categoriaSeleccionada === "Todos"
        ? productos
        : productos.filter(producto =>
            producto.categoria === categoriaSeleccionada
        );

    productosFiltrados.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-producto");

        tarjeta.innerHTML = `
    <img
        class="imagen-producto"
        src="${escaparHTML(imagenesCategorias[producto.categoria] || '')}"
        alt="${escaparHTML(producto.nombre)}"
        loading="lazy"
    >

    <div class="contenido-tarjeta">

        <span class="etiqueta-categoria">
            ${escaparHTML(producto.categoria)}
        </span>

        <h3>${escaparHTML(producto.nombre)}</h3>

        <p class="descripcion-producto">
            ${escaparHTML(producto.descripcion || "Consulta los detalles de este producto.")}
        </p>

        ${mostrarPrecios(producto)}

    </div>
`;


        contenedorProductos.appendChild(tarjeta);

    });

}


// =====================================
// CREAR BOTONES DE CATEGORÍAS
// =====================================

function crearCategorias() {

    const categorias = [
        "Todos",
        ...new Set(productos.map(producto => producto.categoria))
    ];

    contenedorCategorias.innerHTML = "";

    categorias.forEach(categoria => {

        const boton = document.createElement("button");

        boton.textContent = categoria;
        boton.classList.add("boton-categoria");

        if (categoria === "Todos") {
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {

            document.querySelectorAll(".boton-categoria")
                .forEach(boton => boton.classList.remove("activo"));

            boton.classList.add("activo");

            mostrarProductos(categoria);

        });

        contenedorCategorias.appendChild(boton);

    });

}


// =====================================
// INICIAR MENÚ
// =====================================

crearCategorias();
mostrarProductos();
