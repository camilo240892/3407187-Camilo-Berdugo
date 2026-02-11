/* ============================================
   FICHA INTERACTIVA - PLATAFORMA AGRÍCOLA
   Dominio: Plataforma de venta directa de productos agrícolas
   ============================================ */

// ============================================
// 1️⃣ Datos de la Plataforma (Objeto Principal)
// ============================================

const entityData = {
  name: 'Frubana',
  description: 'Frubana es una plataforma tecnológica que conecta agricultores y productores con restaurantes y negocios, eliminando intermediarios y optimizando la cadena de suministro agrícola en Latinoamérica.',
  identifier: 'FRU-LATAM-2026',

  contact: {
    email: 'soporte@frubana.com',
    phone: '+57 1 508 8500',
    location: 'Latinoamérica (Colombia, México, Brasil)'
  },

  items: [
    { name: 'Frutas Frescas', level: 95, category: 'Frutas' },
    { name: 'Verduras Premium', level: 92, category: 'Hortalizas' },
    { name: 'Tubérculos Seleccionados', level: 88, category: 'Tubérculos' },
    { name: 'Granos y Legumbres', level: 90, category: 'Granos' },
    { name: 'Productos Orgánicos', level: 93, category: 'Orgánicos' },
    { name: 'Distribución Express', level: 97, category: 'Logística' }
  ],

  links: [
    { platform: 'Sitio Web', url: 'https://www.frubana.com', icon: '🌐' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/frubana', icon: '💼' },
    { platform: 'Instagram', url: 'https://www.instagram.com/frubana', icon: '📸' }
  ],

  stats: {
    totalProducts: 3000,
    activeFarmers: 1000,
    monthlySales: 50000,
    rating: 4.8
  }
};

// ============================================
// 2️⃣ Referencias al DOM
// ============================================

const userName = document.getElementById('userName');
const userTitle = document.getElementById('userTitle');
const userLocation = document.getElementById('userLocation');
const userBio = document.getElementById('userBio');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');

const skillsList = document.getElementById('skillsList');
const socialLinks = document.getElementById('socialLinks');
const statsContainer = document.getElementById('stats');

const themeToggle = document.getElementById('themeToggle');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const toggleSkillsBtn = document.getElementById('toggleSkills');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// 3️⃣ Renderizar Información Básica
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    description,
    contact: { email, phone, location }
  } = entityData;

  userName.textContent = name;
  userTitle.textContent = 'Plataforma de Venta Directa Agrícola';
  userLocation.textContent = `📍 ${location}`;
  userBio.textContent = description;
  userEmail.textContent = email;
  userPhone.textContent = phone;
};

// ============================================
// 4️⃣ Renderizar Productos
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow.map(item => {
    const { name, level, category } = item;

    return `
      <div class="skill-item">
        <div class="skill-name">${name} (${category})</div>
        <div class="skill-level">
          <span>${level}% calidad</span>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width:${level}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  skillsList.innerHTML = itemsHtml;
};

// ============================================
// 5️⃣ Renderizar Enlaces
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(link => {
    const { platform, url, icon } = link;

    return `
      <a href="${url}" target="_blank" class="social-link">
        ${icon} ${platform}
      </a>
    `;
  }).join('');

  socialLinks.innerHTML = linksHtml;
};

// ============================================
// 6️⃣ Renderizar Estadísticas
// ============================================

const renderStats = () => {
  const {
    items,
    stats: { totalProducts, activeFarmers, monthlySales, rating }
  } = entityData;

  // Ejemplo de cálculo dinámico con reduce
  const averageQuality = Math.round(
    items.reduce((acc, item) => acc + item.level, 0) / items.length
  );

  const statsArray = [
    { label: 'Productos Totales', value: totalProducts },
    { label: 'Agricultores Activos', value: activeFarmers },
    { label: 'Ventas Mensuales', value: monthlySales },
    { label: 'Calidad Promedio', value: `${averageQuality}%` },
    { label: 'Rating', value: rating }
  ];

  const statsHtml = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// 7️⃣ Cambio de Tema
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.querySelector('.theme-icon').textContent =
    newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;

  themeToggle.querySelector('.theme-icon').textContent =
    savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// 8️⃣ Copiar Información
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Email: ${contact?.email ?? 'No disponible'}
`.trim();

  navigator.clipboard.writeText(infoText);
  showToast('¡Información copiada correctamente!');
};

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// 9️⃣ Mostrar/Ocultar Productos
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);

  toggleSkillsBtn.textContent =
    showingAllItems ? 'Mostrar menos' : 'Mostrar más';
};

// ============================================
// 🔟 Event Listeners
// ============================================

themeToggle.addEventListener('click', toggleTheme);
copyEmailBtn.addEventListener('click', copyInfo);
toggleSkillsBtn.addEventListener('click', handleToggleItems);

// ============================================
// 1️⃣1️⃣ Inicialización
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log('✅ Plataforma agrícola inicializada correctamente');
};

init();
