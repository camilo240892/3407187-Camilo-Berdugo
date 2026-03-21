// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// Dominio: Venta de Productos Agrícolas
// ============================================

// Este programa simula una calculadora para una tienda agrícola.
// Permite calcular ventas, descuentos, ingresos totales
// y validar condiciones de compra.
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base de la tienda agrícola

// Precios de productos (en pesos colombianos)
const PRICE_APPLE = 2_000;
const PRICE_BANANA = 1_500;
const PRICE_ORANGE = 2_500;

// Cantidad mínima para aplicar descuento
const MIN_QUANTITY_DISCOUNT = 10;

// Valor mínimo de compra para descuento
const MIN_PURCHASE = 50_000;

// Porcentaje de descuento
const DISCOUNT_RATE = 0.10;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Cantidad de productos vendidos
let quantityApple = 12;
let quantityBanana = 7;
let quantityOrange = 9;

// Cálculo de totales por producto (*)
const totalApple = PRICE_APPLE * quantityApple;
const totalBanana = PRICE_BANANA * quantityBanana;
const totalOrange = PRICE_ORANGE * quantityOrange;

console.log("Total manzanas:", totalApple);
console.log("Total bananos:", totalBanana);
console.log("Total naranjas:", totalOrange);

// Suma total de la venta (+)
const totalSale = totalApple + totalBanana + totalOrange;
console.log("Total de la venta:", totalSale);

// Promedio de venta (/)
const averageSale = totalSale / 3;
console.log("Promedio por producto:", averageSale);

// Resta para saber cuánto falta para descuento (-)
const missingForDiscount = MIN_PURCHASE - totalSale;
console.log("Falta para descuento:", missingForDiscount);

// Uso de módulo (%) → saber si la cantidad de manzanas es par o impar
const remainderApple = quantityApple % 2;
console.log("Residuo de manzanas (par=0, impar=1):", remainderApple);

// Potencia (**) → ejemplo: duplicar precio de manzana al cuadrado
const powerExample = PRICE_APPLE ** 2;
console.log("Precio manzana al cuadrado:", powerExample);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Acumulador de ingresos
let totalIncome = 0;

console.log("Ingreso inicial:", totalIncome);

// Sumar ventas de manzanas (+=)
totalIncome += totalApple;
console.log("Después de manzanas:", totalIncome);

// Sumar ventas de bananos (+=)
totalIncome += totalBanana;
console.log("Después de bananos:", totalIncome);

// Sumar ventas de naranjas (+=)
totalIncome += totalOrange;
console.log("Después de naranjas:", totalIncome);

// Aplicar descuento del 10% (*=)
console.log("Antes del descuento:", totalIncome);
totalIncome *= (1 - DISCOUNT_RATE);
console.log("Después del descuento:", totalIncome);

// Simular devolución de dinero (-=)
console.log("Antes de devolución:", totalIncome);
totalIncome -= 5_000;
console.log("Después de devolución:", totalIncome);

// Ajuste de ingresos (/=)
console.log("Antes de ajuste:", totalIncome);
totalIncome /= 2;
console.log("Después de ajuste:", totalIncome);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Tipo de cliente
const customerType = "frequent"; // puede ser "frequent" o "new"

// Validar si es cliente frecuente (===)
const isFrequentCustomer = customerType === "frequent";
console.log("¿Cliente frecuente?", isFrequentCustomer);

// Validar si es cliente nuevo (!==)
const isNewCustomer = customerType !== "frequent";
console.log("¿Cliente nuevo?", isNewCustomer);

// Validar si la compra cumple el mínimo para descuento (>=)
const qualifiesForDiscount = totalSale >= MIN_PURCHASE;
console.log("¿Aplica descuento por compra mínima?", qualifiesForDiscount);

// Validar si compró muchas manzanas (>)
const highApplePurchase = quantityApple > MIN_QUANTITY_DISCOUNT;
console.log("¿Compra alta de manzanas?", highApplePurchase);

// Validar si no compró bananos (=== 0)
const noBananas = quantityBanana === 0;
console.log("¿No compró bananos?", noBananas);

console.log("");
// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Condición con && → cliente frecuente Y compra alta
const specialDiscount = isFrequentCustomer && totalSale >= MIN_PURCHASE;
console.log("¿Aplica descuento especial?", specialDiscount);

// Condición con || → compra alta de manzanas O naranjas
const bulkPurchase = quantityApple > 10 || quantityOrange > 10;
console.log("¿Compra al por mayor?", bulkPurchase);

// Uso de ! (NOT) → negar condición
const noDiscount = !qualifiesForDiscount;
console.log("¿NO aplica descuento?", noDiscount);

// Condición combinada real del negocio
const finalOffer = (isFrequentCustomer && totalSale >= MIN_PURCHASE) || bulkPurchase;
console.log("¿Aplica oferta final?", finalOffer);

console.log("");
// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// Calcular descuento final basado en condiciones
let finalDiscount = 0;

if (specialDiscount) {
    finalDiscount = totalSale * DISCOUNT_RATE;
}

// Total a pagar
const finalPayment = totalSale - finalDiscount;

// Mostrar resumen general
console.log("Tipo de cliente:", customerType);
console.log("Total de la compra:", totalSale);
console.log("Descuento aplicado:", finalDiscount);
console.log("Total a pagar:", finalPayment);
console.log("¿Compra al por mayor?:", bulkPurchase);
console.log("¿Aplica oferta final?:", finalOffer);

console.log(""); 
