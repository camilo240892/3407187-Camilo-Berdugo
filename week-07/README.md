# 🌽 Proyecto Semana 07: Librería de Funciones

🎯 **ÚNICO ENTREGABLE:** Este proyecto es el único entregable obligatorio para aprobar la semana.

---

## 📋 Dominio

En este proyecto trabajé con el dominio de **venta de productos agrícolas**, usando ejemplos como frutas, verduras y granos.

---

## 🎯 Objetivo

El objetivo de este trabajo fue crear una librería de funciones reutilizables en JavaScript, donde cada función recibe datos, los procesa y devuelve un resultado usando `return`, sin mezclar la lógica con los `console.log`.

---

## 🧠 ¿Qué hice en el proyecto?

### 🔹 1. Definí los datos

Primero creé un array con varios productos agrícolas, donde cada uno tiene:

* nombre
* categoría
* precio
* estado (activo o no)

---

### 🔹 2. Función de formato

Creé una función tipo arrow que recibe un producto y devuelve un texto formateado con su información (nombre, categoría y precio).

---

### 🔹 3. Función de cálculo

Hice una función que calcula el precio total de compra dependiendo de la cantidad y un posible descuento.

---

### 🔹 4. Función de validación

Implementé una función que verifica si un producto está disponible o no, devolviendo `true` o `false`.

---

### 🔹 5. Función con parámetro por defecto

Creé una función para formatear valores (como precios), usando un valor por defecto para la moneda.

---

### 🔹 6. Reporte final usando funciones

Por último, hice un reporte donde:

* Recorro los productos con `for...of`
* Uso la función de formato para mostrar cada uno
* Uso la función de validación para contar disponibles
* Uso la función de cálculo para obtener el total
* Muestro el resultado final con otra función

---

## 💡 Ejemplo de salida

```id="w7_readme_out"
═════════════════════════════════════════════
   REPORTE — Venta de productos agrícolas
═════════════════════════════════════════════

📋 Listado:
  1. 🌽 Tomate — verdura — precio: $3000
  2. 🌽 Papa — verdura — precio: $2000
  3. 🌽 Manzana — fruta — precio: $2500
  4. 🌽 Banano — fruta — precio: $1800
  5. 🌽 Arroz — grano — precio: $4000

✅ Productos disponibles: 4 / 5
Total precio: $13300

═════════════════════════════════════════════
```

---

## 🛠️ Estructura del proyecto

```id="w7_struct"
week-07/
└── starter/
    └── script.js
```

---

## 🚀 Cómo ejecutar

Para ejecutar el proyecto uso el siguiente comando en la terminal:

```id="w7_run"
node week-07/starter/script.js
```

---

## 📌 Conclusión

En este proyecto pude entender mejor cómo funcionan las funciones en JavaScript, cómo reutilizarlas y cómo separar la lógica del código que muestra resultados en consola.

---

## 👨‍💻 Autor

**Camilo Berdugo**
Estudiante de programación - SENA
