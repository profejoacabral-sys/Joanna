// Función para verificar si los campos del formulario están completos
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario si los campos no están completos
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre === '' || email === '' || mensaje === '') {
        console.log("Por favor, completa todos los campos del formulario.");
        
        if (nombre === '') {
            console.log("El campo 'Nombre' está vacío.");
        }
        if (email === '') {
            console.log("El campo 'Correo Electrónico' está vacío.");
        }
        if (mensaje === '') {
            console.log("El campo 'Mensaje' está vacío.");
        }
    } else {
        console.log("Formulario enviado correctamente.");
        // Aquí podrías permitir que el formulario se envíe si todo está correcto
        // this.submit(); // Descomentar esta línea si se desea enviar el formulario.
    }
});

// Función para verificar si los campos del formulario están completos
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevenir el envío del formulario si los campos no están completos
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (nombre === '' || email === '' || mensaje === '') {
            console.log("Por favor, completa todos los campos del formulario.");
            
            if (nombre === '') {
                console.log("El campo 'Nombre' está vacío.");
            }
            if (email === '') {
                console.log("El campo 'Correo Electrónico' está vacío.");
            }
            if (mensaje === '') {
                console.log("El campo 'Mensaje' está vacío.");
            }
        } else {
            console.log("Formulario enviado correctamente.");
            
        }
    });

    // Lista de productos disponibles
    const productos1 = [
        { nombre: "Cookies Navideñas", descripcion: "Box de 6 (Seis) Galletas Navideñas a elección", imagen: "Imagenes/Navidad.jfif" },
        { nombre: "Cookies Baby Shower", descripcion: "Box de 6 (Seis) Galletas para eventos especiales a elección", imagen: "Imagenes/baby.jpg" },
        { nombre: "Cookies Disney", descripcion: "Box de 6 (Seis) Galletas de diseños de Disney a elección", imagen: "Imagenes/stich.jfif" },
        { nombre: "Cookies Retro", descripcion: "Box de 6 (Seis) Galletas de diseños retro a elección", imagen: "Imagenes/Retro.jpg" }
    ];

    // Generar dinámicamente los productos y mostrarlos en la consola
    productos1.forEach(producto => {
        console.log(`Producto: ${producto.nombre}`);
        console.log(`Descripción: ${producto.descripcion}`);
        console.log(`Imagen: ${producto.imagen}`);
        console.log('------------------------------');
    });

  // Array de productos
const productos = [
    {
        id: 1,
        nombre: "Cookies Navideñas",
        descripcion: "Deliciosas galletas decoradas para la Navidad.",
        imagen: "Imagenes/Navidad.jfif",
        precio: "$12.99"
    },
    {
        id: 2,
        nombre: "Cookies Baby Shower",
        descripcion: "Perfectas para celebrar nacimientos o baby showers.",
        imagen: "Imagenes/baby.jpg",
        precio: "$14.99"
    },
    {
        id: 3,
        nombre: "Cookies Disney",
        descripcion: "Galletas decoradas con tus personajes favoritos de Disney.",
        imagen: "Imagenes/stich.jfif",
        precio: "$15.99"
    },
    {
        id: 4,
        nombre: "Cookies Retro",
        descripcion: "Diseños clásicos y retro en cada galleta.",
        imagen: "Imagenes/Retro.jpg",
        precio: "$13.99"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Cargar carrito inicial
    cargarCarrito();

    // Asignar eventos a los botones de agregar al carrito
    var botonesAgregar = document.querySelectorAll('.btn2');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarProducto);
    });
});

// Vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', function () {
    localStorage.removeItem('carrito');
    cargarCarrito();
});

// Función para agregar productos al carrito
function agregarProducto(event) {
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: parseFloat(event.target.getAttribute('data-precio'))
    };

    // Leer carrito de localStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);

    // Guardar carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Función para cargar el carrito en el DOM
/*function cargarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar lista actual

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var total = 0;

    carrito.forEach(producto => {
        // Crear elemento <li> para cada producto
        var li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);

        total += producto.precio;
    });*/

    function cargarCarrito() {
        var listaCarrito = document.getElementById('lista-carrito');
        var totalPagar = document.getElementById('total-pagar');
    
        if (!listaCarrito || !totalPagar) {
            console.error("No se encuentran los elementos del carrito en el DOM.");
            return;
        }
    
        listaCarrito.innerHTML = ''; // Limpiar lista actual
    
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        var total = 0;
    
        carrito.forEach((producto, index) => {
            // Crear elemento <li> para cada producto
            var li = document.createElement('li');
            li.innerHTML = `
                ${producto.nombre} - $${producto.precio}
                <button class="btn-eliminar" data-id="${index}">Eliminar</button>
            `;
            listaCarrito.appendChild(li);
    
            total += producto.precio;
        });
    
        totalPagar.textContent = `Total a pagar: $${total}`;
    
        // Agregar evento de eliminar a los botones
        const botonesEliminar = document.querySelectorAll('.btn-eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', eliminarProducto);
        });
    }
    
    function eliminarProducto(event) {
        var index = parseInt(event.target.getAttribute('data-id'));
    
        // Leer carrito de localStorage
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
        // Eliminar el producto del carrito
        carrito.splice(index, 1);
    
        // Guardar carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    
        // Recargar el carrito en el DOM
        cargarCarrito();
    }

    // Agregar eventos de giro
    document.querySelectorAll(".btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const card = document.querySelectorAll(".card")[index];
            card.classList.add("flip");
        });
    });

    // Agregar eventos para volver al frente
    document.querySelectorAll(".btn-volver").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const card = document.querySelectorAll(".card")[index];
            card.classList.remove("flip");
        });
    });


    // Agregar evento para el botón "Realizar Compra"
document.getElementById('realizar-compra').addEventListener('click', function() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var modalCompra = document.getElementById('modal-compra');
    var detallesCompra = document.getElementById('detalles-compra');
    var totalCompra = document.getElementById('total-compra');
    var metodosPago = document.getElementById('metodos-pago');

    // Limpiar contenido anterior del modal
    detallesCompra.innerHTML = '';
    
    // Calcular el total
    var total = 0;
    carrito.forEach(producto => {
        var li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        detallesCompra.appendChild(li);
        total += producto.precio;
    });

    // Mostrar total a pagar
    totalCompra.textContent = `Total a pagar: $${total}`;

    // Mostrar el modal
    modalCompra.style.display = 'block';
});

// Agregar evento para cerrar el modal
document.getElementById('cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal-compra').style.display = 'none';
});

    // Actualizar total en el DOM
    document.getElementById('total-pagar').textContent = `Total a pagar: $${total}`;
