/**
 * ============================================
 * PROYECTO GESTOR DE PRODUCTOS AGRÍCOLAS
 * AgroMarket - Venta Directa
 * ============================================
 */


// ============================================
// ESTADO GLOBAL
// ============================================


let products = [];
let editingProductId = null;


// ============================================
// CATEGORÍAS Y PRIORIDADES
// ============================================


const CATEGORIES = {
  fruit: { name: 'Frutas', emoji: '🍎' },
  vegetable: { name: 'Verduras', emoji: '🥦' },
  grain: { name: 'Granos', emoji: '🌾' },
  dairy: { name: 'Lácteos', emoji: '🥛' },
  tuber: { name: 'Tubérculos', emoji: '🥔' }
};


const PRIORITIES = {
  high: { name: 'Perecedero', color: '#ef4444' },
  medium: { name: 'Estándar', color: '#f59e0b' },
  low: { name: 'Larga Duración', color: '#22c55e' },
};


// ============================================
// PERSISTENCIA (LocalStorage)
// ============================================


/**
 * Carga los productos desde LocalStorage
 * @returns {Array} Array de productos guardados
 */
const loadProducts = () => {
  return JSON.parse(localStorage.getItem('agroMarketItems') ?? '[]');
};


/**
 * Guarda los productos en LocalStorage
 * @param {Array} itemsToSave - Array de productos a guardar
 */
const saveProducts = itemsToSave => {
  localStorage.setItem('agroMarketItems', JSON.stringify(itemsToSave));
};


// ============================================
// CRUD - OPERACIONES
// ============================================


/**
 * Crea un nuevo producto
 * @param {Object} productData - Datos del nuevo producto
 * @returns {Array} Nuevo array de productos
 */
const createProduct = (productData = {}) => {
  const newProduct = {
    id: Date.now(),
    name: productData.name ?? 'Sin nombre',
    description: productData.description ?? '',
    category: productData.category ?? 'fruit',
    priority: productData.priority ?? 'medium',
    price: Number(productData.price ?? 0),
    stock: Number(productData.stock ?? 0),
    unit: productData.unit ?? 'kg',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    ...productData
  };
 
  const newProducts = [...products, newProduct];
  saveProducts(newProducts);
  return newProducts;
};


/**
 * Actualiza un producto existente
 * @param {Number} id - ID del producto
 * @param {Object} updates - Propiedades a actualizar
 * @returns {Array} Nuevo array actualizado
 */
const updateProduct = (id, updates) => {
  const updatedProducts = products.map(product =>
    product.id === id
      ? { ...product, ...updates, updatedAt: new Date().toISOString() }
      : product
  );
  saveProducts(updatedProducts);
  return updatedProducts;
};


/**
 * Elimina un producto por su ID
 * @param {Number} id - ID del producto
 * @returns {Array} Nuevo array sin el producto
 */
const deleteProduct = id => {
  const filteredProducts = products.filter(product => product.id !== id);
  saveProducts(filteredProducts);
  return filteredProducts;
};


/**
 * Alterna la disponibilidad de un producto
 * @param {Number} id - ID del producto
 * @returns {Array} Nuevo array actualizado
 */
const toggleProductAvailability = id => {
  const updatedProducts = products.map(product =>
    product.id === id
      ? { ...product, active: !product.active, updatedAt: new Date().toISOString() }
      : product
  );
  saveProducts(updatedProducts);
  return updatedProducts;
};
/**
 * Elimina productos no disponibles
 */
const clearUnavailable = () => {
  const activeProducts = products.filter(product => product.active);
  saveProducts(activeProducts);
  return activeProducts;
};


// ============================================
// FILTROS Y BÚSQUEDA
// ============================================


const filterByStatus = (items, status = 'all') => {
  if (status === 'all') return items;
  return items.filter(item => status === 'active' ? item.active : !item.active);
};


const filterByCategory = (items, category = 'all') => {
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
};


const filterByPriority = (items, priority = 'all') => {
  if (priority === 'all') return items;
  return items.filter(item => item.priority === priority);
};


const searchProducts = (items, query) => {
  if (!query?.trim()) return items;
  const term = query.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term)
  );
};


const applyFilters = (items, filters = {}) => {
  const {
    status = 'all',
    category = 'all',
    priority = 'all',
    search = ''
  } = filters;


  let result = filterByStatus(items, status);
  result = filterByCategory(result, category);
  result = filterByPriority(result, priority);
  result = searchProducts(result, search);
  return result;
};


// ============================================
// ESTADÍSTICAS
// ============================================


const getStats = (items = []) => {
  const total = items.length;
  const active = items.filter(p => p.active).length;
  const inactive = total - active;


  const byCategory = items.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});


  const totalValue = items.reduce((acc, p) => acc + (p.price * p.stock), 0);


  return { total, active, inactive, byCategory, totalValue };
};


// ============================================
// RENDERIZADO
// ============================================


const getCategoryEmoji = category => CATEGORIES[category]?.emoji ?? '🚜';


const formatDate = dateString => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('es-ES', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
};


const renderProduct = product => {
  const { id, name, description, category, priority, active, price, stock, unit, createdAt } = product;
 
  return `
    <div class="product-card ${active ? '' : 'is-unavailable'} priority-${priority}" data-id="${id}">
      <div class="product-header">
        <span class="product-emoji">${getCategoryEmoji(category)}</span>
        <div class="product-title-group">
          <h3 class="product-name">${name}</h3>
          <span class="product-category-name">${CATEGORIES[category]?.name}</span>
        </div>
        <input type="checkbox" class="toggle-availability" ${active ? 'checked' : ''} title="Disponible">
      </div>
     
      <p class="product-description">${description || 'Sin descripción disponible'}</p>
     
      <div class="product-details">
        <div class="product-price-info">
          <span class="price">$${price.toLocaleString()}</span>
          <span class="unit">/ ${unit}</span>
        </div>
        <div class="product-stock">
          Stock: <strong>${stock} ${unit}</strong>
        </div>
      </div>


      <div class="product-meta">
        <span class="badge priority-${priority}">${PRIORITIES[priority]?.name}</span>
        <span class="product-date">📅 ${formatDate(createdAt)}</span>
      </div>


      <div class="product-actions">
        <button class="btn-edit" onclick="handleEdit(${id})">✏️ Editar</button>
        <button class="btn-delete" onclick="handleDelete(${id})">🗑️ Borrar</button>
      </div>
    </div>
  `;
};


const renderProducts = itemsToRender => {
  const productGrid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');


  if (itemsToRender.length === 0) {
    productGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    productGrid.innerHTML = itemsToRender.map(renderProduct).join('');
  }
};


const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-value').textContent = `$${stats.totalValue.toLocaleString()}`;
 
  const categoryStats = Object.entries(stats.byCategory)
    .map(([cat, count]) => `<span>${getCategoryEmoji(cat)} ${CATEGORIES[cat]?.name}: ${count}</span>`)
    .join('');
  document.getElementById('stats-categories').innerHTML = categoryStats;
};


// ============================================
// MANEJADORES DE EVENTOS
// ============================================


const handleFormSubmit = e => {
  e.preventDefault();


  const formData = new FormData(e.target);
  const productData = {
    name: formData.get('name').trim(),
    description: formData.get('description').trim(),
    category: formData.get('category'),
    priority: formData.get('priority'),
    price: formData.get('price'),
    stock: formData.get('stock'),
    unit: formData.get('unit')
  };


  if (!productData.name) return alert('El nombre es requerido');


  if (editingProductId) {
    products = updateProduct(editingProductId, productData);
  } else {
    products = createProduct(productData);
  }


  resetForm();
  refreshUI();
};


const handleEdit = id => {
  const product = products.find(p => p.id === id);
  if (!product) return;


  const form = document.getElementById('product-form');
  form.elements['name'].value = product.name;
  form.elements['description'].value = product.description;
  form.elements['category'].value = product.category;
  form.elements['priority'].value = product.priority;
  form.elements['price'].value = product.price;
  form.elements['stock'].value = product.stock;
  form.elements['unit'].value = product.unit;


  document.getElementById('form-title').textContent = '✏️ Editar Producto';
  document.getElementById('submit-btn').textContent = 'Guardar Cambios';
  document.getElementById('cancel-btn').classList.remove('hidden');
 
  editingProductId = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


const handleDelete = id => {
  if (confirm('¿Eliminar este producto de la oferta?')) {
    products = deleteProduct(id);
    refreshUI();
  }
};


const handleToggleAvailability = id => {
  products = toggleProductAvailability(id);
  refreshUI();
};


const refreshUI = () => {
  const filters = {
    status: document.getElementById('filter-status').value,
    category: document.getElementById('filter-category').value,
    priority: document.getElementById('filter-priority').value,
    search: document.getElementById('search-input').value
  };
 
  const filtered = applyFilters(products, filters);
  renderProducts(filtered);
  renderStats(getStats(products));
};


const resetForm = () => {
  document.getElementById('product-form').reset();
  document.getElementById('form-title').textContent = '➕ Nuevo Producto';
  document.getElementById('submit-btn').textContent = 'Añadir Producto';
  document.getElementById('cancel-btn').classList.add('hidden');
  editingProductId = null;
};


// ============================================
// INICIALIZACIÓN
// ============================================


const init = () => {
  products = loadProducts();
 
  // Event Listeners
  document.getElementById('product-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('cancel-btn').addEventListener('click', resetForm);
 
  ['filter-status', 'filter-category', 'filter-priority'].forEach(id => {
    document.getElementById(id).addEventListener('change', refreshUI);
  });
 
  document.getElementById('search-input').addEventListener('input', refreshUI);
 
  document.getElementById('clear-unavailable').addEventListener('click', () => {
    if (confirm('¿Borrar todos los productos no disponibles?')) {
      products = clearUnavailable();
      refreshUI();
    }
  });


  // Event Delegation
  document.getElementById('product-grid').addEventListener('click', e => {
    if (e.target.classList.contains('toggle-availability')) {
      const id = Number(e.target.closest('.product-card').dataset.id);
      handleToggleAvailability(id);
    }
  });


  refreshUI();
  console.log('🌱 AgroMarket inicializado correctamente');
};


document.addEventListener('DOMContentLoaded', init);