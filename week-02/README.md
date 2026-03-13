# 🌾 Proyecto Semanal — Semana 02: Ficha de Datos del Dominio

🎯 **ÚNICO ENTREGABLE:** Este proyecto es el entregable obligatorio para aprobar la semana 2 del bootcamp.

---

# 🎯 Objetivo

Crear una **ficha de datos en consola usando JavaScript** aplicando las variables y tipos de datos aprendidos durante la semana.

---

# 📋 Dominio Asignado

**Plataforma de venta directa de productos agrícolas**

Este dominio representa una plataforma digital que conecta **agricultores con consumidores**, permitiendo la venta directa de productos agrícolas sin intermediarios.

---

📦 Estructura del proyecto
week-02/
│
├── README.md
│
└── starter/
    └── script.js

El archivo principal es script.js, donde se desarrolla la lógica del proyecto.

---

# ✅ Requisitos funcionales

El script debe mostrar en consola una **ficha de datos del dominio** que incluya:

### 1️⃣ Datos con tipo correcto

El script contiene variables declaradas con `const` utilizando tipos apropiados al dominio:

* **string** → nombre del producto agrícola
* **number** → cantidad disponible del producto
* **boolean** → estado de disponibilidad del producto
* **null** → información aún no asignada (por ejemplo, próxima cosecha o agricultor asignado)

---

### 2️⃣ Verificación de tipos con `typeof`

El programa usa **`typeof`** para verificar el tipo de al menos tres variables.

Ejemplo:

* `typeof itemName`
* `typeof itemQuantity`
* `typeof isItemAvailable`

---

### 3️⃣ Conversión explícita de datos

El script realiza una conversión explícita usando:

```id="f55gog"
String(itemQuantity)
```

Esto convierte un valor **number** en **string** para mostrarlo como texto en la consola.

---

### 4️⃣ Buena nomenclatura

El código sigue las buenas prácticas de JavaScript:

* Variables en **camelCase**
* Constantes en **UPPER_SNAKE_CASE**
* Boolean con prefijo semántico (`isItemAvailable`)

---

### 5️⃣ Uso de números con separadores

Para mejorar la lectura de números grandes se pueden usar separadores `_` en valores numéricos.

Ejemplo:

```id="vkn2xj"
const itemQuantity = 1_500;
```

---

# 📊 Ejemplo de salida del programa

```id="udq2eg"
===========================
FICHA DE DATOS: Plataforma de venta directa de productos agrícolas
===========================

Producto:     Café Orgánico de Nariño
Categoría:    Café - Producto orgánico
Cantidad:     120
Disponible:   true

--- Tipos de datos ---
typeof itemName:        string
typeof itemQuantity:    number
typeof isItemAvailable: boolean

--- Conversiones ---
Cantidad como texto: 120
typeof convertido: string

--- Valor nulo ---
Próxima cosecha: null
typeof null: object
¿Es null?: true

===========================
FIN DE FICHA
===========================
```

---

# 🛠️ Tecnologías utilizadas

* **JavaScript (ES2023)**
* **Node.js**
* **Consola del sistema**

---

# ▶️ Cómo ejecutar el proyecto

1. Abrir la terminal en la carpeta del proyecto.
2. Ejecutar el script con Node.js:

node week-02/starter/script.js
```

3. La consola mostrará la **ficha de datos del dominio agrícola**.

---

# 👨‍💻 Autor

**David Camilo Berdugo**
