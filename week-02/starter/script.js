// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 DOMINIO: Plataforma de venta directa de productos agrícolas
//
// ⚠️  POLÍTICA ANTICOPIA: Esta implementación está
//    adaptada al dominio de venta directa de productos agrícolas.
//
// Adapta cada sección del código al contexto de la
// comercialización de productos agrícolas.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Plataforma de venta directa de productos agrícolas";

// Producto que se vende en la plataforma
const itemName = "Café orgánico de finca";

// Categoría del producto
const itemCategory = "Granos y café especial";

// Cantidad disponible del producto (en kg)
const itemQuantity = 1_500;

// Boolean que indica si el producto está disponible para la venta
const isItemAvailable = true;

// Agricultor asignado al producto (aún no registrado)
const farmerAssigned = null;

// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// Mostrar datos del dominio
console.log(`Producto:     ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Cantidad:     ${itemQuantity} kg disponibles`);
console.log(`Disponible:   ${isItemAvailable}`);

console.log("");

// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// Mostrar el tipo de las variables
console.log("typeof itemName:      ", typeof itemName);
console.log("typeof itemQuantity:  ", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("");
// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir la cantidad del producto a texto
const quantityAsText = String(itemQuantity);

console.log("Cantidad disponible como texto:", quantityAsText + " kg");
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");
// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

// Mostrar el valor null del agricultor asignado
console.log("Agricultor asignado:", farmerAssigned);
console.log("typeof null:", typeof farmerAssigned);
console.log("¿Es null?:", farmerAssigned === null);

console.log("");
// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");