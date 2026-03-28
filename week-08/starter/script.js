// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// Dominio: Inventario de productos agrícolas 🌽
//
// Este proyecto gestiona un inventario de productos como
// frutas, verduras y granos usando métodos de arrays.
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Inventario de productos agrícolas";
const VALUE_LABEL = "precio";
// ============================================
// 1. ARRAY INICIAL — Define el inventario
// ============================================

const items = [
  { id: 1, name: "Tomate", category: "verdura", price: 3000, stock: 50, active: true },
  { id: 2, name: "Papa", category: "verdura", price: 2000, stock: 80, active: true },
  { id: 3, name: "Manzana", category: "fruta", price: 2500, stock: 40, active: false },
  { id: 4, name: "Banano", category: "fruta", price: 1800, stock: 100, active: true },
  { id: 5, name: "Arroz", category: "grano", price: 4000, stock: 60, active: true }
];
// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — Precio: $${item.price} — Stock: ${item.stock}`;
};
// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo producto
addItem({ id: 6, name: "Maíz", category: "grano", price: 2200, stock: 70, active: true });

// Agregar producto prioritario
addPriorityItem({ id: 0, name: "Fresa", category: "fruta", price: 5000, stock: 30, active: true });

// Eliminar elemento del medio
removeByIndex(2);

// Eliminar último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar producto
const foundItem = findByName("Tomate");
console.log("Resultado búsqueda:", foundItem ? formatItem(foundItem) : "No encontrado");

// Mostrar activos
const activeItems = getActiveItems();
console.log(`Productos activos: ${activeItems.length}`);

// Spread (copia sin modificar original)
const snapshot = [...items, { id: 99, name: "Producto extra", category: "otro", price: 1000, stock: 10, active: false }];
console.log(`Snapshot (copia con extra): ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento (10%)
const discountedPrices = items.map(item => ({
  name: item.name,
  discountedPrice: Math.round(item.price * 0.9)
}));
console.log("Precios con descuento:", discountedPrices);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);