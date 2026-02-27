// ============================================
// CLASE BASE - BaseItem (Producto Agrícola)
// ============================================
/**
 * Clase base abstracta para todos los productos agrícolas
 * dentro de la plataforma de venta directa.
 *
 * Representa cualquier producto publicado por un agricultor.
 */
class BaseItem {
  // Campos privados obligatorios
  #id;
  #name;
  #active;
  #location;
  #dateCreated;

  /**
   * Constructor de la clase base
   * @param {string} name - Nombre del producto agrícola
   * @param {string} location - Ubicación del agricultor o finca
   */
  constructor(name, location) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#location = location;
    this.#active = true;
    this.#dateCreated = new Date().toISOString();
  }

  // ============================================
  // GETTERS - Acceso controlado a propiedades
  // ============================================

  /**
   * Retorna el ID único del producto
   */
  get id() {
    return this.#id;
  }

  /**
   * Retorna el nombre del producto
   */
  get name() {
    return this.#name;
  }

  /**
   * Retorna si el producto está activo en la plataforma
   */
  get isActive() {
    return this.#active;
  }

  /**
   * Retorna la ubicación del productor
   */
  get location() {
    return this.#location;
  }

  /**
   * Retorna la fecha de creación del registro
   */
  get dateCreated() {
    return this.#dateCreated;
  }

  // ============================================
  // SETTERS - Modificación controlada con validación
  // ============================================

  /**
   * Establece la ubicación del producto con validación
   * @param {string} value - Nueva ubicación
   */
  set location(value) {
    if (!value || value.trim() === '') {
      throw new Error('La ubicación no puede estar vacía');
    }

    this.#location = value.trim();
  }

  // ============================================
  // MÉTODOS DE INSTANCIA
  // ============================================

  /**
   * Activa el producto en la plataforma
   * @returns {Object} Resultado de la operación
   */
  activate() {
    if (this.#active) {
      return {
        success: false,
        message: 'El producto ya está activo'
      };
    }

    this.#active = true;

    return {
      success: true,
      message: 'Producto activado correctamente'
    };
  }

  /**
   * Desactiva el producto en la plataforma
   * @returns {Object} Resultado de la operación
   */
  deactivate() {
    if (!this.#active) {
      return {
        success: false,
        message: 'El producto ya está inactivo'
      };
    }

    this.#active = false;

    return {
      success: true,
      message: 'Producto desactivado correctamente'
    };
  }

  /**
   * Método abstracto - DEBE ser sobrescrito en clases hijas
   * Cada tipo de producto agrícola debe implementar su propia información
   */
  getInfo() {
    throw new Error('El método getInfo() debe ser implementado en la clase hija');
  }

  /**
   * Retorna el tipo de producto (nombre de la clase)
   */
  getType() {
    return this.constructor.name;
  }
}
// ============================================
// CLASES DERIVADAS - Tipos de Productos Agrícolas
// ============================================

/**
 * Clase Fruit - Representa frutas en la plataforma
 */
class Fruit extends BaseItem {
  #sweetLevel;
  #season;

  constructor(name, location, sweetLevel, season) {
    super(name, location);
    this.#sweetLevel = sweetLevel;
    this.#season = season;
  }

  // Getters
  get sweetLevel() {
    return this.#sweetLevel;
  }

  get season() {
    return this.#season;
  }

  // Implementación de getInfo
  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      sweetLevel: this.#sweetLevel,
      season: this.#season,
      active: this.isActive
    };
  }
}

/**
 * Clase Vegetable - Representa verduras en la plataforma
 */
class Vegetable extends BaseItem {
  #organic;
  #weight;

  constructor(name, location, organic, weight) {
    super(name, location);
    this.#organic = organic;
    this.#weight = weight;
  }

  // Getters
  get organic() {
    return this.#organic;
  }

  get weight() {
    return this.#weight;
  }

  // Implementación de getInfo
  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      organic: this.#organic,
      weight: this.#weight,
      active: this.isActive
    };
  }
}

/**
 * Clase Grain - Representa granos en la plataforma
 */
class Grain extends BaseItem {
  #quantity;
  #quality;

  constructor(name, location, quantity, quality) {
    super(name, location);
    this.#quantity = quantity;
    this.#quality = quality;
  }

  // Getters
  get quantity() {
    return this.#quantity;
  }

  get quality() {
    return this.#quality;
  }

  // Implementación de getInfo
  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      quantity: this.#quantity,
      quality: this.#quality,
      active: this.isActive
    };
  }
}
// ============================================
// CLASE PERSON - Base para usuarios del sistema
// ============================================
/**
 * Clase base para todos los usuarios de la plataforma
 * de venta directa de productos agrícolas.
 *
 * De aquí se derivarán:
 * Farmer (agricultor)
 * Buyer (comprador)
 */
class Person {
  // Campos privados
  #id;
  #name;
  #email;
  #registrationDate;

  constructor(name, email) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#email = email;
    this.#registrationDate = new Date().toISOString();
  }

  // ============================================
  // GETTERS
  // ============================================

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get registrationDate() {
    return this.#registrationDate;
  }

  // ============================================
  // SETTER CON VALIDACIÓN
  // ============================================

  set email(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      throw new Error('Formato de email inválido');
    }

    this.#email = value;
  }

  /**
   * Retorna la información básica del usuario
   */
  getInfo() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      registrationDate: this.#registrationDate
    };
  }
}
// ============================================
// CLASES DE ROLES - Usuarios especializados
// ============================================

/**
 * Farmer - Agricultor que vende productos en la plataforma
 */
class Farmer extends Person {
  #farmName;
  #productsPublished;

  constructor(name, email, farmName) {
    super(name, email);
    this.#farmName = farmName;
    this.#productsPublished = [];
  }

  /**
   * Publica un producto agrícola en la plataforma
   */
  publishProduct(product) {
    this.#productsPublished.push(product);
  }

  get farmName() {
    return this.#farmName;
  }

  get productsPublished() {
    return this.#productsPublished;
  }
}

/**
 * Buyer - Comprador de productos agrícolas
 */
class Buyer extends Person {
  #address;
  #orders;

  constructor(name, email, address) {
    super(name, email);
    this.#address = address;
    this.#orders = [];
  }

  /**
   * Registra una compra realizada
   */
  addOrder(order) {
    this.#orders.push(order);
  }

  get address() {
    return this.#address;
  }

  get orders() {
    return this.#orders;
  }
}
// ============================================
// CLASE PRINCIPAL DEL SISTEMA
// Plataforma de venta directa de productos agrícolas
// ============================================
class MainSystem {
  // Campos privados
  #items = [];
  #users = [];
  #transactions = [];

  // Configuración inicial del sistema
  static {
    this.VERSION = '1.0.0';
    this.MAX_ITEMS = 1000;
    this.SYSTEM_NAME = 'Agricultural Direct Sales Platform';

    console.log(`Sistema ${this.SYSTEM_NAME} v${this.VERSION} cargado`);
  }

  // ============================================
  // MÉTODOS ESTÁTICOS
  // ============================================

  static isValidId(id) {
    return typeof id === 'string' && id.length > 0;
  }

  static generateId() {
    return crypto.randomUUID();
  }

  // ============================================
  // CRUD DE PRODUCTOS AGRÍCOLAS
  // ============================================

  addItem(item) {
    if (!(item instanceof BaseItem)) {
      return {
        success: false,
        message: 'El producto debe ser instancia de BaseItem'
      };
    }

    if (this.#items.length >= MainSystem.MAX_ITEMS) {
      return {
        success: false,
        message: 'Se alcanzó el límite de productos'
      };
    }

    this.#items.push(item);

    return {
      success: true,
      message: 'Producto agregado correctamente',
      item
    };
  }

  removeItem(id) {
    const index = this.#items.findIndex(item => item.id === id);

    if (index === -1) {
      return {
        success: false,
        message: 'Producto no encontrado'
      };
    }

    const removed = this.#items.splice(index, 1)[0];

    return {
      success: true,
      message: 'Producto eliminado',
      item: removed
    };
  }

  findItem(id) {
    return this.#items.find(item => item.id === id) ?? null;
  }

  getAllItems() {
    return [...this.#items];
  }

  // ============================================
  // BÚSQUEDA Y FILTROS
  // ============================================

  searchByName(query) {
    const searchTerm = query.toLowerCase();

    return this.#items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  filterByType(type) {
    return this.#items.filter(item => item.getType() === type);
  }

  filterByStatus(active) {
    return this.#items.filter(item => item.isActive === active);
  }

  // ============================================
  // ESTADÍSTICAS DEL SISTEMA
  // ============================================

  getStats() {
    const total = this.#items.length;
    const active = this.#items.filter(item => item.isActive).length;
    const inactive = total - active;

    const byType = this.#items.reduce((acc, item) => {
      const type = item.getType();
      acc[type] = (acc[type] ?? 0) + 1;
      return acc;
    }, {});

    return {
      totalProducts: total,
      activeProducts: active,
      inactiveProducts: inactive,
      productsByType: byType,
      totalUsers: this.#users.length
    };
  }

  // ============================================
  // GESTIÓN DE USUARIOS
  // ============================================

  addUser(user) {
    if (!(user instanceof Person)) {
      return {
        success: false,
        message: 'El usuario debe ser instancia de Person'
      };
    }

    this.#users.push(user);

    return {
      success: true,
      message: 'Usuario registrado correctamente'
    };
  }

  findUserByEmail(email) {
    return this.#users.find(user => user.email === email) ?? null;
  }

  getAllUsers() {
    return [...this.#users];
  }
}
// ============================================
// INSTANCIA DEL SISTEMA Y DATOS DE PRUEBA
// ============================================

// Crear la instancia principal del sistema
const system = new MainSystem();

// ============================================
// CREAR USUARIOS DE PRUEBA
// ============================================

// Agricultores
const farmer1 = new Farmer('Carlos Ramírez', 'carlos@finca.com', 'Finca El Progreso');
const farmer2 = new Farmer('María Gómez', 'maria@campo.com', 'Finca La Esperanza');

// Compradores
const buyer1 = new Buyer('Juan Torres', 'juan@gmail.com', 'Bogotá');
const buyer2 = new Buyer('Laura Martínez', 'laura@gmail.com', 'Medellín');

// Registrar usuarios en el sistema
system.addUser(farmer1);
system.addUser(farmer2);
system.addUser(buyer1);
system.addUser(buyer2);

// ============================================
// CREAR PRODUCTOS AGRÍCOLAS
// ============================================

// Frutas
const mango = new Fruit('Mango', 'Tolima', 'Alto', 'Verano');
const banana = new Fruit('Banano', 'Urabá', 'Medio', 'Todo el año');

// Verduras
const tomato = new Vegetable('Tomate', 'Cundinamarca', true, '1kg');
const lettuce = new Vegetable('Lechuga', 'Boyacá', true, '500g');

// Granos
const rice = new Grain('Arroz', 'Meta', '100kg', 'Premium');
const corn = new Grain('Maíz', 'Valle del Cauca', '200kg', 'Alta');

// Agregar productos al sistema
system.addItem(mango);
system.addItem(banana);
system.addItem(tomato);
system.addItem(lettuce);
system.addItem(rice);
system.addItem(corn);

// Agricultores publican productos
farmer1.publishProduct(mango);
farmer1.publishProduct(rice);
farmer2.publishProduct(banana);
farmer2.publishProduct(corn);

// ============================================
// PRUEBAS EN CONSOLA
// ============================================

console.log('Todos los productos:', system.getAllItems());
console.log('Buscar producto "mango":', system.searchByName('mango'));
console.log('Filtrar frutas:', system.filterByType('Fruit'));
console.log('Estadísticas del sistema:', system.getStats());
// ============================================
// REFERENCIAS AL DOM
// ============================================

// Formulario para agregar productos agrícolas
const itemForm = document.getElementById('item-form');

// Lista donde se mostrarán los productos
const itemList = document.getElementById('item-list');

// Contenedor de estadísticas del sistema
const statsContainer = document.getElementById('stats');

// Filtro por tipo de producto (Fruit, Vegetable, Grain)
const filterType = document.getElementById('filter-type');

// Filtro por estado del producto (Activo / Inactivo)
const filterStatus = document.getElementById('filter-status');

// Buscador de productos
const searchInput = document.getElementById('search-input');
// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

/**
 * Renderiza un elemento individual (producto agrícola)
 * @param {BaseItem} item - Elemento a renderizar
 * @returns {string} HTML del elemento
 */
const renderItem = item => {
  const info = item.getInfo();
  return `
    <div class="item ${item.isActive ? '' : 'inactive'}" data-id="${item.id}">
      <div class="item-header">
        <h3>${info.name}</h3>
        <span class="badge">${item.getType()}</span>
      </div>
      <div class="item-details">
        <p>Ubicación: ${info.location}</p>
        <p>Estado: ${item.isActive ? 'Activo' : 'Inactivo'}</p>
        ${
          item.getType() === 'Fruit'
            ? `<p>Dulzura: ${info.sweetLevel}, Temporada: ${info.season}</p>`
            : ''
        }
        ${
          item.getType() === 'Vegetable'
            ? `<p>Orgánico: ${info.organic ? 'Sí' : 'No'}, Peso: ${info.weight}</p>`
            : ''
        }
        ${
          item.getType() === 'Grain'
            ? `<p>Cantidad: ${info.quantity}, Calidad: ${info.quality}</p>`
            : ''
        }
      </div>
      <div class="item-actions">
        <button class="btn-toggle" data-id="${item.id}">
          ${item.isActive ? 'Desactivar' : 'Activar'}
        </button>
        <button class="btn-delete" data-id="${item.id}">Eliminar</button>
      </div>
    </div>
  `;
};

/**
 * Renderiza la lista completa de productos
 * @param {Array} items - Array de productos
 */
const renderItems = (items = []) => {
  if (items.length === 0) {
    itemList.innerHTML = '<p class="empty">No hay productos</p>';
    return;
  }
  itemList.innerHTML = items.map(renderItem).join('');
};

/**
 * Renderiza las estadísticas del sistema
 * @param {Object} stats - Objeto de estadísticas
 */
const renderStats = stats => {
  statsContainer.innerHTML = `
    <div class="stat">Total de productos: ${stats.totalProducts}</div>
    <div class="stat">Activos: ${stats.activeProducts}</div>
    <div class="stat">Inactivos: ${stats.inactiveProducts}</div>
    <div class="stat">Usuarios registrados: ${stats.totalUsers}</div>
    <div class="stat">Productos por tipo: 
      ${Object.entries(stats.productsByType)
        .map(([type, count]) => `${type}: ${count}`)
        .join(', ')}
    </div>
  `;
};
// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Maneja el envío del formulario para agregar un nuevo producto
 */
const handleFormSubmit = e => {
  e.preventDefault();

  const formData = new FormData(itemForm);
  const name = formData.get('name').trim();
  const location = formData.get('location').trim();
  const type = formData.get('type');

  if (!name || !location) {
    alert('Por favor completa todos los campos');
    return;
  }

  let newItem;

  // Crear instancia según tipo seleccionado
  if (type === 'Fruit') {
    const sweetLevel = formData.get('sweetLevel') || 'Medio';
    const season = formData.get('season') || 'Todo el año';
    newItem = new Fruit(name, location, sweetLevel, season);
  } else if (type === 'Vegetable') {
    const organic = formData.get('organic') === 'on';
    const weight = formData.get('weight') || '1kg';
    newItem = new Vegetable(name, location, organic, weight);
  } else if (type === 'Grain') {
    const quantity = formData.get('quantity') || '100kg';
    const quality = formData.get('quality') || 'Normal';
    newItem = new Grain(name, location, quantity, quality);
  } else {
    alert('Tipo de producto inválido');
    return;
  }

  // Agregar al sistema
  system.addItem(newItem);

  // Limpiar formulario
  itemForm.reset();

  // Re-renderizar
  handleFilterChange();
  renderStats(system.getStats());
};

/**
 * Maneja cambios en los filtros y búsqueda
 */
const handleFilterChange = () => {
  let filtered = system.getAllItems();

  // Filtro por tipo
  const typeValue = filterType.value;
  if (typeValue && typeValue !== 'All') {
    filtered = filtered.filter(item => item.getType() === typeValue);
  }

  // Filtro por estado
  const statusValue = filterStatus.value;
  if (statusValue && statusValue !== 'All') {
    const active = statusValue === 'Active';
    filtered = filtered.filter(item => item.isActive === active);
  }

  // Filtro por búsqueda
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm));
  }

  renderItems(filtered);
};

/**
 * Maneja acciones de los botones de cada producto (activar/desactivar, eliminar)
 */
const handleItemAction = e => {
  const target = e.target;
  const itemId = target.dataset.id;
  if (!itemId) return;

  const item = system.findItem(itemId);
  if (!item) return;

  // Activar / desactivar
  if (target.classList.contains('btn-toggle')) {
    if (item.isActive) item.deactivate();
    else item.activate();
  }

  // Eliminar
  if (target.classList.contains('btn-delete')) {
    if (confirm('¿Eliminar este producto?')) {
      system.removeItem(itemId);
    }
  }

  // Re-renderizar lista y estadísticas
  handleFilterChange();
  renderStats(system.getStats());
};

// ============================================
// EVENT LISTENERS
// ============================================

// Formulario
itemForm.addEventListener('submit', handleFormSubmit);

// Filtros
filterType.addEventListener('change', handleFilterChange);
filterStatus.addEventListener('change', handleFilterChange);
searchInput.addEventListener('input', handleFilterChange);

// Lista de productos (delegación de eventos)
itemList.addEventListener('click', handleItemAction);

// Render inicial
renderItems(system.getAllItems());
renderStats(system.getStats());
// ============================================
// EVENT LISTENERS (conectados al DOM)
// ============================================

// Formulario de productos
itemForm.addEventListener('submit', handleFormSubmit);

// Filtros por tipo y estado
filterType.addEventListener('change', handleFilterChange);
filterStatus.addEventListener('change', handleFilterChange);

// Buscador de productos en tiempo real
searchInput.addEventListener('input', handleFilterChange);

// Lista de productos - delegación de eventos para botones
itemList.addEventListener('click', handleItemAction);
// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  // Renderizar lista de productos existente
  renderItems(system.getAllItems());

  // Renderizar estadísticas
  renderStats(system.getStats());

  console.log('✅ Sistema inicializado correctamente');
};

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});