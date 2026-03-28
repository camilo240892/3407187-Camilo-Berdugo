// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Venta de productos agrícolas
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA:
// Este script clasifica productos agrícolas según
// su stock, tipo, estado y otros datos.
//
// ============================================
// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Producto agrícola
const elementName = "Tomate";           // nombre del producto
const elementStatus = "active";         // estado: "activo" o "inactivo"
const elementValue = 120;               // stock disponible (valor numérico)
const elementType = "verdura";          // tipo: fruta, verdura, grano, etc.

// Información adicional (puede ser null o incompleta)
const elementInfo = {
    proveedor: {
        nombre: "Finca El Progreso",
        ubicacion: "Cundinamarca"
    }
};
// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasificación del stock del producto
let classification;

if (elementValue < 50) {
    classification = "Stock bajo";
} else if (elementValue >= 50 && elementValue <= 100) {
    classification = "Stock medio";
} else {
    classification = "Stock alto";
}
// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Estado del producto (disponible o no disponible)
const statusLabel = elementStatus === "active" 
    ? "Disponible" 
    : "No disponible";
// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
    case "fruta":
        typeLabel = "Producto tipo fruta 🍎";
        break;
    case "verdura":
        typeLabel = "Producto tipo verdura 🥦";
        break;
    case "grano":
        typeLabel = "Producto tipo grano 🌾";
        break;
    default:
        typeLabel = "Tipo de producto desconocido";
}
// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Nombre del producto (por si viene null)
const displayName = elementName ?? "Sin nombre";

// Información adicional (acceso seguro con ?. + valor por defecto con ??)
const infoDetail = elementInfo?.proveedor?.nombre ?? "Sin información del proveedor";
// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Ubicación del proveedor (acceso seguro)
const safeProperty = elementInfo?.proveedor?.ubicacion ?? "Ubicación no disponible";
// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación del proveedor: ${safeProperty}`);

console.log("=".repeat(40));