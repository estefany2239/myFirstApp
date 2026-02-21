
📝 Descripción
Este proyecto es una aplicación web moderna desarrollada con React y Vite. Combina un catálogo interactivo de productos (desde tecnología como el iPhone 17 hasta gastronomía local) con una interfaz de administración para la gestión de inventario. El objetivo principal es demostrar el manejo de rutas dinámicas, el uso de Props para la reutilización de componentes y un diseño responsivo de alta calidad.

✨ Características Principales
Gestión de Catálogo: Visualización dinámica de productos con etiquetas de stock.

Enrutamiento Dinámico: Navegación fluida entre Inicio, Artículos y Props usando react-router-dom.

Componentes Reutilizables: Implementación de Avatares y Cards mediante el paso de propiedades (Props).

Diseño Responsivo: Interfaz adaptada a móviles y escritorio gracias a Bootstrap 5.

Panel de Administración: Formulario integrado para la simulación de carga de nuevos productos.

🎨 Interfaz Gráfica
La interfaz se divide en secciones clave:

Header: Barra de navegación oscura con contador de carrito.

Sección Principal (Content): Layout de dos columnas:

Izquierda: Galería de productos con badges de stock y acciones (Editar/Eliminar).

Derecha: Formulario "Sticky" para agregar productos al catálogo.

Sección Props: Galería de perfiles científicos presentados en Cards estilizadas.

🏗️ Arquitectura del Proyecto
El proyecto sigue una estructura de carpetas modular para facilitar el mantenimiento:

Plaintext
src/
├── features/           # Funcionalidades específicas
│   └── layout/         # Componentes globales de la interfaz
│       └── components/ # Header, Footer, Content, Article, Props
├── shared/             # Recursos compartidos
│   └── styles/         # Archivos CSS globales y específicos
├── App.jsx             # Componente raíz y configuración de Rutas
└── main.jsx            # Punto de entrada de la aplicación
👤 Datos del Autor
Nombre: [Estefany Arango]

Rol: Desarrollador 

Tecnologías: React, JavaScript, HTML, CSS, Bootstrap.

Proyecto: Carrito de compras React 