Proyecto Semana 03: Sistema de Gestión con POO – Plataforma de Venta Directa de Productos Agrícolas
🎯 Objetivo del Proyecto

## 📋 Información del Proyecto

- **Nombre:** Camilo Berdugo  
- **Fecha:** 10/02/2026  
- **Dominio Asignado:** Plataforma de venta directa de productos agrícolas

El objetivo de este proyecto es implementar un Sistema de Gestión de Productos Agrícolas utilizando Programación Orientada a Objetos (POO) en JavaScript.

El sistema permite:

A los agricultores, publicar y gestionar sus productos.

A los compradores, registrarse y consultar productos.

A los usuarios, interactuar con los productos de manera visual y dinámica.

Este proyecto es el único entregable obligatorio de la semana y se desarrolla dentro del dominio único asignado, siguiendo la política establecida por el instructor.

🏛️ Política de Dominios Únicos

Cada proyecto se debe implementar dentro del contexto del dominio asignado. En este caso, el dominio es:

Plataforma de venta directa de productos agrícolas

Esto asegura que todas las funcionalidades estén alineadas con la temática de gestión de productos agrícolas y los roles de usuarios involucrados (agricultores y compradores).

⚙️ Funcionalidades implementadas
1. Gestión de Productos

Clases base y derivadas:

BaseItem – clase abstracta de productos agrícolas.

Fruit – frutas, con dulzura y temporada.

Vegetable – verduras, con atributo orgánico y peso.

Grain – granos, con cantidad y calidad.

CRUD de productos: agregar, eliminar, activar/desactivar, buscar y filtrar.

Búsqueda y filtrado:

Por nombre (buscador en tiempo real).

Por tipo (Fruit, Vegetable, Grain).

Por estado (Activo / Inactivo).

Estadísticas dinámicas: total de productos, activos, inactivos y por tipo.

2. Gestión de Usuarios

Clases de usuarios:

Person – clase base.

Farmer – agricultor que publica productos.

Buyer – comprador que registra pedidos.

Registro y validación de usuarios.

Relación entre agricultores y productos publicados.

3. Interfaz de usuario

Formulario de registro de productos con campos dinámicos según el tipo de producto.

Filtros y buscador para consultar productos rápidamente.

Listado interactivo de productos con:

Información detallada según el tipo de producto.

Botones para activar/desactivar y eliminar productos.

Estadísticas actualizadas en tiempo real.

Modo oscuro con un botón toggle.

4. Validaciones

Campos obligatorios: name y location.

Validación de correo electrónico para usuarios.

Control del número máximo de productos (MAX_ITEMS = 1000).

5. Datos de prueba

Agricultores: Carlos Ramírez y María Gómez.

Compradores: Juan Torres y Laura Martínez.

Productos: Mango, Banano, Tomate, Lechuga, Arroz y Maíz.

🖥️ Estructura del proyecto
/proyecto-semana03/
│
├─ index.html          # Interfaz principal del sistema
├─ style.css           # Estilos de la página y modo oscuro
├─ script.js           # Lógica de POO, gestión de productos y usuarios
├─ README.md           # Documentación del proyecto
📌 Clases principales del sistema
Productos

BaseItem: clase abstracta para todos los productos.

Fruit: frutas, con atributos sweetLevel y season.

Vegetable: verduras, con atributos organic y weight.

Grain: granos, con atributos quantity y quality.

Usuarios

Person: clase base para todos los usuarios.

Farmer: agricultor que publica productos.

Buyer: comprador que registra pedidos.

Sistema Principal

MainSystem: gestiona productos, usuarios y estadísticas.

Incluye métodos de búsqueda, filtrado, agregación y eliminación.

📊 Uso del sistema

Abrir index.html en el navegador.

Agregar productos mediante el formulario, completando todos los campos obligatorios y seleccionando el tipo.

Filtrar productos por tipo o estado, o buscar por nombre en tiempo real.

Activar/desactivar productos con el botón correspondiente.

Eliminar productos si es necesario.

Consultar estadísticas dinámicas en el panel superior.

Cambiar entre modo claro y oscuro con el botón toggle.

💻 Tecnologías utilizadas

HTML5 – Estructura de la interfaz.

CSS3 – Diseño responsivo, estilo de productos y modo oscuro.

JavaScript (ES6+) – POO, eventos del DOM, validaciones y lógica de la plataforma.

✅ Observaciones

Cumple con POO completa, incluyendo herencia, encapsulamiento, getters, setters y métodos abstractos.

Implementa dominio único de productos agrícolas.

Incluye datos de prueba para agricultores, compradores y productos.

La interfaz permite interactuar con todas las funciones del sistema de forma visual y dinámica.