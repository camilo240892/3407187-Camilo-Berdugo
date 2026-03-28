# 🌽 Proyecto Semana 05: Clasificador de Productos Agrícolas

🎯 **ÚNICO ENTREGABLE:** Este proyecto es el único entregable obligatorio para aprobar la semana.

---

## 📋 Dominio Asignado

**Dominio:** Venta de Productos Agrícolas

---

## 🎯 Objetivo

Implementar un sistema de clasificación en JavaScript para productos agrícolas, utilizando estructuras condicionales como `if/else`, operador ternario, `switch`, `nullish coalescing (??)` y `optional chaining (?.)`.

---

## ✅ Requisitos Funcionales

El script cumple con:

### ✔ Datos del elemento

Se definieron variables que representan un producto agrícola:

* Nombre del producto
* Estado (activo/inactivo)
* Cantidad disponible (stock)
* Tipo de producto (fruta, verdura, grano)
* Información adicional del proveedor

---

### ✔ Estado con operador ternario

Se determina si el producto está disponible o no:

* `"active"` → Disponible
* `"inactive"` → No disponible

---

### ✔ Tipo con `switch`

Se clasifica el producto según su tipo:

* 🍎 Fruta
* 🥦 Verdura
* 🌾 Grano
* ❓ Tipo desconocido

---

### ✔ Uso de `??` (Nullish Coalescing)

Se asignan valores por defecto cuando los datos son `null` o `undefined`, por ejemplo:

* Nombre del producto
* Información del proveedor

---

### ✔ Uso de `?.` (Optional Chaining)

Se accede de forma segura a propiedades del objeto proveedor sin generar errores si no existen.

---

### ✔ Ficha de salida

Se muestra un resumen en consola utilizando **template literals** (sin concatenación con `+`).

---

## 💡 Ejemplo de salida

```
========================================
FICHA DE CLASIFICACIÓN
========================================
Nombre: Tomate
Estado: Disponible
Clasificación: Stock alto
Tipo: Producto tipo verdura 🥦
Detalle: Finca El Progreso
Ubicación del proveedor: Cundinamarca
========================================
```

---

## 🛠️ Estructura del Proyecto

```
week-05/
├── README.md
└── starter/
    └── script.js
```

---

## 🚀 Cómo ejecutar

Ejecutar el siguiente comando en la terminal:

```
node week-05/starter/script.js
```

---

## 📌 Entregables

* ✔ Archivo `script.js` funcional
* ✔ Uso de estructuras condicionales
* ✔ Implementación de `if/else`, ternario y `switch`
* ✔ Uso de `??` y `?.`
* ✔ Código limpio y organizado
* ✔ Adaptado al dominio de productos agrícolas

---

## 👨‍💻 Autor

**Camilo Berdugo**
Estudiante de programación - SENA
