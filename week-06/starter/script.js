// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Venta de productos agrícolas
// ============================================
//
// INSTRUCCIONES:
// 1. Este script procesa información de productos agrícolas
//    como frutas, verduras y granos.
// 2. Se utilizan diferentes tipos de bucles para generar reportes.
// ============================================
// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Lista de productos agrícolas
const items = [
  { name: "Tomate", category: "verdura", value: 120 },
  { name: "Papa", category: "verdura", value: 80 },
  { name: "Manzana", category: "fruta", value: 50 },
  { name: "Banano", category: "fruta", value: 150 },
  { name: "Arroz", category: "grano", value: 200 },
  { name: "Maíz", category: "grano", value: 90 }
];

// Categorías del dominio
const categories = ["verdura", "fruta", "grano"];

// Nombre del valor numérico
const valueLabel = "stock";
// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");
// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) {
      count++;
    }
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");
// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");
// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {

  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }

    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}

console.log("");
// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ==="); 