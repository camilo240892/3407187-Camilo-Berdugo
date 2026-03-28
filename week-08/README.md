🌽 Proyecto Semana 08: Gestión de Inventario con Arrays

🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana.

📋 Dominio

En este proyecto trabajé con el dominio de venta de productos agrícolas, usando productos como frutas, verduras y granos dentro de un inventario.

🎯 Objetivo

El objetivo de este trabajo fue construir un sistema de gestión de inventario en JavaScript, utilizando diferentes métodos de arrays para agregar, eliminar, buscar, filtrar y transformar datos.

🧠 ¿Qué hice en el proyecto?
🔹 1. Definí el inventario

Primero creé un array con varios productos agrícolas, donde cada uno tiene:

id
nombre
categoría
precio
stock
estado (activo o no)
🔹 2. Métodos de mutación

Implementé funciones para modificar el inventario usando:

push → agregar productos
pop → eliminar el último
unshift → agregar un producto prioritario
splice → eliminar productos por posición
🔹 3. Búsqueda y filtrado

Usé métodos para trabajar con los datos:

find → buscar un producto por nombre
filter → obtener productos activos
🔹 4. Recorrido del inventario

Utilicé:

forEach → para mostrar todos los productos
map → para transformar los datos (ej: obtener nombres y aplicar descuentos)
🔹 5. Uso del spread operator

Usé ... para crear una copia del inventario y agregar elementos sin modificar el original.

🔹 6. Reporte final

Generé un reporte en consola donde:

Muestro el inventario inicial
Aplico cambios (agregar y eliminar productos)
Muestro el inventario actualizado
Realizo búsquedas y filtrados
Transformo datos con map
Muestro un resumen final con productos activos e inactivos
💡 Ejemplo de salida
==================================================
📦 GESTIÓN DE INVENTARIO DE PRODUCTOS AGRÍCOLAS
==================================================

📋 Inventario inicial (5 precio):
  [1] Tomate — verdura — Precio: $3000 — Stock: 50
  [2] Papa — verdura — Precio: $2000 — Stock: 80
  ...

--- Operaciones de mutación ---

Agregado: Maíz
Elemento prioritario agregado: Fresa
Eliminado por índice: Papa
Eliminado: Maíz

--- Inventario después de mutaciones ---

...

--- Resumen final ---

Total en inventario: 5 precio
Activos: 4 | Inactivos: 1

🛠️ Estructura del proyecto
week-08/
└── starter/
    └── script.js
🚀 Cómo ejecutar

Para ejecutar el proyecto uso el siguiente comando en la terminal:

node week-08/starter/script.js
📌 Conclusión

En este proyecto aprendí a manejar mejor los arrays en JavaScript, usando diferentes métodos para modificar, buscar y transformar datos, además de generar un reporte completo del inventario.

👨‍💻 Autor

Camilo Berdugo
Estudiante de programación - SENA