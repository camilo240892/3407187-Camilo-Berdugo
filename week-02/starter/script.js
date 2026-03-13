// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// Dominio: Plataforma de venta directa de productos agrícolas
//
// ============================================


// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Plataforma de venta directa de productos agrícolas";

// Producto dentro de la plataforma
const itemName = "Café Orgánico de Nariño";

// Categoría del producto
const itemCategory = "Café - Producto orgánico";

// Cantidad disponible en inventario
const itemQuantity = 120;

// Indica si el producto está disponible para la venta
const isItemAvailable = true;

// Próxima fecha de cosecha (aún no asignada)
const nextHarvestDate = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Producto:     ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Cantidad:     ${itemQuantity}`);
console.log(`Disponible:   ${isItemAvailable}`);

console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================

console.log("--- Tipos de datos ---");

console.log("typeof itemName:       ", typeof itemName);
console.log("typeof itemQuantity:   ", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================

console.log("--- Conversiones ---");

// Convertimos la cantidad a texto
const quantityAsText = String(itemQuantity);

console.log("Cantidad como texto:", quantityAsText);
console.log("typeof convertido:", typeof quantityAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

console.log("Próxima cosecha:", nextHarvestDate);
console.log("typeof null:", typeof nextHarvestDate);
console.log("¿Es null?:", nextHarvestDate === null);

console.log("");


// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");