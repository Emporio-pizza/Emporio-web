
const productos = [

    // =================================
    // PROMOCIONES
    // =================================

    {
        nombre: "4 Estaciones",
        categoria: "Promociones",
        descripcion: "Pizza dividida en cuatro secciones: pepperoni, jamón, salchicha y chorizo.",
        precios: { M: 139, G: 159 }
    },
    {
        nombre: "Lunes y martes",
        categoria: "Promociones",
        descripcion: "Dos pizzas medianas de dos ingredientes a elegir y un litro de agua de sabor. Solo mostrador.",
        precio: 300
    },
    {
        nombre: "Paquete 1",
        categoria: "Promociones",
        descripcion: "Una pizza familiar, una pizza mediana y un spaghetti.",
        precio: 380
    },
    {
        nombre: "Paquete 2",
        categoria: "Promociones",
        descripcion: "Una pizza grande de especialidad, una pizza mediana de un ingrediente y un spaghetti.",
        precio: 350
    },

    // =================================
    // PIZZAS DE MOSTRADOR
    // =================================

    {
        nombre: "Pizza de pepperoni",
        categoria: "Mostrador",
        descripcion: "Pizza tradicional de pepperoni.",
        precios: { M: 99, G: 119, F: 179 }
    },
    {
        nombre: "Pizza de un ingrediente",
        categoria: "Mostrador",
        descripcion: "Elige entre pepperoni, jamón, salami, salchicha, chorizo, tocino, champiñón o queso crema.",
        precios: { M: 125, G: 135, F: 185 }
    },

    // =================================
    // PIZZAS DE ESPECIALIDAD
    // =================================

    {
        nombre: "Emporio",
        categoria: "Especialidades",
        descripcion: "Pepperoni, pimiento y champiñones naturales."
    },
    {
        nombre: "Margarita",
        categoria: "Especialidades",
        descripcion: "Jitomate rebanado, albahaca fresca, aceite de oliva y extra queso."
    },
    {
        nombre: "Hawaiana",
        categoria: "Especialidades",
        descripcion: "Jamón, extra piña natural y extra queso."
    },
    {
        nombre: "Clásica",
        categoria: "Especialidades",
        descripcion: "Jamón, extra champiñones naturales y extra queso."
    },
    {
        nombre: "Delicatessen",
        categoria: "Especialidades",
        descripcion: "Pepperoni, jamón y salami."
    },
    {
        nombre: "Regina",
        categoria: "Especialidades",
        descripcion: "Pepperoni, chorizo, salchicha y chilorio."
    },
    {
        nombre: "Boneless",
        categoria: "Especialidades",
        descripcion: "Boneless ahumados."
    },
    {
        nombre: "Mexicana",
        categoria: "Especialidades",
        descripcion: "Chorizo, jalapeño, cebolla y tocino."
    },
    {
        nombre: "Cuaresma",
        categoria: "Especialidades",
        descripcion: "Atún, champiñones naturales, aceituna y cebolla."
    },
    {
        nombre: "Pastor",
        categoria: "Especialidades",
        descripcion: "Carne al pastor, cebolla, piña y pimiento."
    },
    {
        nombre: "Sinaloa",
        categoria: "Especialidades",
        descripcion: "Chilorio, queso crema y jalapeño."
    },
    {
        nombre: "Veggie",
        categoria: "Especialidades",
        descripcion: "Pimiento, cebolla, champiñones naturales, aceituna y queso crema."
    },

    // =================================
    // ESPECIALIDADES GOURMET
    // =================================


    {
        nombre: "Camarones a la parrilla",
        categoria: "Gourmet",
        descripcion: "Camarones a la parrilla, cebolla morada, aceituna, albahaca y aderezo de chipotle."
    },
    {
        nombre: "Chicharrón de La Ramos",
        categoria: "Gourmet",
        descripcion: "Chicharrón de La Ramos, mezcla de quesos, tocino y salsa verde de tomates asados. Se pone aparte."
    },
    {
        nombre: "Jamón serrano",
        categoria: "Gourmet",
        descripcion: "Láminas de jamón serrano, tres quesos, queso de cabra, arúgula y manzana caramelizada.",
        precios: { M: 259, G: 299, F: 350 }
    },

    // =================================
    // ENSALADAS
    // =================================

    {
        nombre: "Ensalada de manzana",
        categoria: "Ensaladas",
        descripcion: "Mezcla de lechugas, zanahoria, apio, manzana, aceituna y aderezo.",
        precio: 65
    },
    {
        nombre: "Ensalada de la casa",
        categoria: "Ensaladas",
        descripcion: "Mezcla de lechugas, jitomate, zanahoria, aceituna y aderezo.",
        precio: 65
    },

    // =================================
    // ACOMPAÑAMIENTOS
    // =================================

    {
        nombre: "Boneless BBQ",
        categoria: "Acompañamientos",
        descripcion: "Boneless BBQ de 250 gramos.",
        precio: 120
    },
    {
        nombre: "Boneless picantes",
        categoria: "Acompañamientos",
        descripcion: "Boneless picantes de 250 gramos.",
        precio: 120
    },
    {
        nombre: "Rollos de jamón",
        categoria: "Acompañamientos",
        descripcion: "Rollos de jamón con cuadros de queso panela.",
        precio: 30
    },
    {
        nombre: "Spaghetti",
        categoria: "Acompañamientos",
        descripcion: "Disponible en salsa roja o blanca.",
        precio: 60
    },

    // =================================
    // BEBIDAS
    // =================================

    {
        nombre: "Agua de fruta",
        categoria: "Bebidas",
        descripcion: "Agua de fruta natural.",
        precios: { "1 litro": 50, "½ litro": 30 }
    },
    {
        nombre: "Refresco",
        categoria: "Bebidas",
        descripcion: "Refresco de 1.75 litros o lata.",
        precios: { "1.75 litros": 50, "Lata": 25 }
    },

    // =================================
    // EXTRAS
    // =================================

    {
        nombre: "Orilla de queso",
        categoria: "Extras",
        descripcion: "Agrega queso a la orilla de tu pizza.",
        precios: { G: 60, F: 80 }
    }

];

const imagenesCategorias = {
    "Promociones": "img/promocion.jpg",
    "Mostrador": "img/pizza peperoni.jpg",
    "Especialidades": "img/pizza margarita.jpg",
    "Gourmet": "img/jamon serrano.jpg",
    "Ensaladas": "img/ensalada.jpg",
    "Acompañamientos": "img/boneless.jpg",
    "Bebidas": "img/refresco emporio.jpg"
};