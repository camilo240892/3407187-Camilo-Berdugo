# 🌽 Proyecto Semana 04: Generador de Mensajes de Dominio

🎯 **ÚNICO ENTREGABLE:** Este proyecto es el único entregable obligatorio para aprobar la semana.

---

## 📋 Dominio Asignado

**Dominio:** Venta de Productos Agrícolas

⚠️ **POLÍTICA ANTICOPIA:** Cada aprendiz tiene un dominio único. Este proyecto está completamente adaptado al dominio asignado. Una implementación copiada o no adaptada resulta en calificación de cero.

---

## 🎯 Objetivo

Construir un generador de mensajes en consola enfocado en la venta de productos agrícolas, utilizando métodos de string de JavaScript y template literals para generar una salida clara y estructurada.

---

## ✅ Requisitos Funcionales

El script cumple con:

### ✔ Declaración de datos con `const`

* Nombre del producto agrícola (con espacios y mezcla de mayúsculas/minúsculas)
* Categoría del producto
* Descripción del producto
* Código identificador

### ✔ Uso de métodos de string

Se implementaron los siguientes métodos:

* `toUpperCase()`
* `toLowerCase()`
* `trim()`
* `includes()`
* `startsWith()`
* `endsWith()`
* `slice()`
* `repeat()`

### ✔ Uso de template literals

Toda la salida se construye usando **template literals** (`` ` ` ``), sin concatenación con `+`.

### ✔ Generación de mensajes

El programa genera:

* 📄 **Ficha multilínea del producto**
* 📢 **Mensaje corto tipo notificación**
* ✅ **Validaciones con métodos de string**

---

## 💡 Ejemplo de salida

```
=============================================
  VENTA DE PRODUCTOS AGRÍCOLAS — FICHA DE PRODUCTO
=============================================
Nombre:      TOMATE ORGÁNICO PREMIUM
Categoría:   Verduras frescas
Código:      AGR-001
Prefijo:     AGR
Precio:      $3500
Estado:      Disponible

---------------------------------------------
Descripción:
Tomates cultivados sin químicos, frescos y directos del campo para una alimentación saludable.
=============================================

--- Validaciones ---
¿Código empieza con 'AGR'?: true
¿Descripción contiene 'frescos'?: true
¿Código termina con '001'?: true

--- Notificación ---
📢 Nuevo producto disponible: Tomate Orgánico Premium (AGR-001) - Precio: $3500
```

---

## 🛠️ Estructura del Proyecto

```
week-04/
├── README.md
└── starter/
    └── script.js
```

---

## 🚀 Cómo ejecutar

Ejecutar el siguiente comando en la terminal:

```
node week-04/starter/script.js
```

---

## 📌 Entregables

* ✔ Archivo `script.js` funcional
* ✔ Adaptado al dominio de productos agrícolas
* ✔ Uso de múltiples métodos de string
* ✔ Uso de template literals
* ✔ Código comentado en español

---
## 👨‍💻 Autor

**David Camilo Berdugo**  
Estudiante de programación - SENA