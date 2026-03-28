# 🌽 Proyecto Semana 06: Reporte con Bucles

🎯 **ÚNICO ENTREGABLE:** Este proyecto es el único entregable obligatorio para aprobar la semana.

---

## 📋 Dominio

En este proyecto trabajé con el dominio de **venta de productos agrícolas**, usando ejemplos como frutas, verduras y granos.

---

## 🎯 Objetivo

El objetivo de este trabajo fue crear un sistema en JavaScript que permita generar un reporte a partir de varios productos, utilizando diferentes tipos de bucles como `for`, `for...of` y `while`.

---

## 🧠 ¿Qué hice en el proyecto?

### 🔹 1. Definí los datos

Primero creé un array con varios productos agrícolas, donde cada uno tiene:

* nombre
* categoría (fruta, verdura o grano)
* stock disponible

---

### 🔹 2. Listé todos los productos

Usé un `for...of` para recorrer todos los productos y mostrarlos en consola con su información básica.

---

### 🔹 3. Conté por categorías

Hice un conteo de cuántos productos hay en cada categoría usando bucles y un contador.

---

### 🔹 4. Calculé el total y el promedio

Sumé todo el stock con un acumulador y luego saqué el promedio dividiendo entre la cantidad de productos.

---

### 🔹 5. Busqué el mayor y el menor

Recorrí el array para encontrar qué producto tiene más stock y cuál tiene menos.

---

### 🔹 6. Hice un reporte final

Con un `for` clásico generé un listado donde indico si cada producto está por encima o por debajo del promedio.

---

### 🔹 7. Uso de while

También agregué un `while` con `continue` para practicar otro tipo de bucle y cumplir con todos los requisitos.

---

## 💡 Ejemplo de salida

```
=== LISTADO COMPLETO ===
1. Tomate — verdura — stock: 120
2. Papa — verdura — stock: 80
3. Manzana — fruta — stock: 50
4. Banano — fruta — stock: 150
5. Arroz — grano — stock: 200
6. Maíz — grano — stock: 90

=== CONTEO POR CATEGORÍA ===
verdura: 2 elemento(s)
fruta: 2 elemento(s)
grano: 2 elemento(s)

=== ESTADÍSTICAS ===
Total stock: 690
Promedio stock: 115.0

=== MÁXIMO Y MÍNIMO ===
Mayor stock: Arroz (200)
Menor stock: Manzana (50)

=== REPORTE DETALLADO ===
1. Tomate — sobre el promedio
2. Papa — bajo el promedio
3. Manzana — bajo el promedio
4. Banano — sobre el promedio
5. Arroz — sobre el promedio
6. Maíz — bajo el promedio

=== FIN DEL REPORTE ===
```

---

## 🛠️ Estructura del proyecto

```
week-06/
├── README.md
└── starter/
    └── script.js
```

---

## 🚀 Cómo ejecutar

Para ejecutar el proyecto uso el siguiente comando en la terminal:

```
node week-06/starter/script.js
```

---

## 📌 Conclusión

En este proyecto pude practicar el uso de diferentes tipos de bucles en JavaScript, además de trabajar con arreglos, contadores y acumuladores para generar un reporte completo a partir de datos.

---

## 👨‍💻 Autor

**Camilo Berdugo**
Estudiante de programación - SENA
