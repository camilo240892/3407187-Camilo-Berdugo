// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// Dominio: Venta de Productos Agrícolas
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre de tu dominio
const DOMAIN_NAME = "Venta de Productos Agrícolas";

// Nombre de la entidad principal (con espacios y mezcla de mayúsculas/minúsculas)
const rawEntityName = "  Tomate Orgánico Premium  ";

// Categoría o tipo
const entityCategory = "Verduras frescas";

// Código identificador (prefijo coherente con agrícola)
const entityCode = "AGR-001";

// Descripción corta
const entityDescription = "Tomates cultivados sin químicos, frescos y directos del campo para una alimentación saludable.";

// Dato numérico relevante (precio por ejemplo)
const mainValue = 3500;

// Estado del producto (disponible o no)
const isActive = true; 

// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpiar el nombre (quitar espacios al inicio y final)
const entityName = rawEntityName.trim();

// Convertir el nombre a mayúsculas (para encabezados)
const entityNameUpper = entityName.toUpperCase();

// Convertir el nombre a minúsculas (para identificadores internos)
const entityNameLower = entityName.toLowerCase();

// Extraer el prefijo del código (AGR)
const codePrefix = entityCode.slice(0, 3);

// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Verificar si el código empieza con el prefijo correcto (AGR)
const hasValidPrefix = entityCode.startsWith(codePrefix);

// Verificar si la descripción contiene una palabra clave del dominio
const descriptionIsRelevant = entityDescription.includes("frescos");

// Verificar si el código termina con "001"
const hasValidSuffix = entityCode.endsWith("001");

// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Construcción de la ficha multilínea
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE PRODUCTO
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Precio:      $${mainValue}
Estado:      ${isActive ? "Disponible" : "No disponible"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);

// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

// Mostrar resultados de las validaciones
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'frescos'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");

// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// Mensaje corto de una línea
const notification = `📢 Nuevo producto disponible: ${entityName} (${entityCode}) - Precio: $${mainValue}`;
console.log(notification);
console.log("");