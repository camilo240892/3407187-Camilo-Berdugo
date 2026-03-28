// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Venta de productos agrícolas
// ============================================

// NOTA:
// Este proyecto implementa funciones reutilizables
// para trabajar con productos agrícolas como frutas,
// verduras y granos.

"use strict"; // activa el modo estricto — mejores errores
// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes del dominio
const DOMAIN_NAME = "Venta de productos agrícolas";
const VALUE_LABEL = "precio"; // en este caso trabajamos con precios

// Lista de productos agrícolas
const items = [
  { id: 1, name: "Tomate", category: "verdura", value: 3000, active: true },
  { id: 2, name: "Papa", category: "verdura", value: 2000, active: true },
  { id: 3, name: "Manzana", category: "fruta", value: 2500, active: false },
  { id: 4, name: "Banano", category: "fruta", value: 1800, active: true },
  { id: 5, name: "Arroz", category: "grano", value: 4000, active: true }
];
// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `🌽 ${item.name} — ${item.category} — ${VALUE_LABEL}: $${item.value}`;
};
// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (price, quantity, discount = 0) => {
  const total = price * quantity;
  const final = total * (1 - discount / 100);
  return +final.toFixed(2);
};
// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (item) => {
  return item.active;
};
// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "$") => {
  return `${label}: ${currency}${value}`;
};
// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay productos registrados.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\n✅ Productos disponibles: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value, 1);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);