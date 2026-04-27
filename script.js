/* ============================================================
   TWISTER FAMILY — script.js
   ============================================================ */

// ─── MENU DATA ───────────────────────────────────────────────
const menuData = {
  plats: {
    label: "Les Plats",
    icon: "🍽",
    badge: "Signature",
    items: [
      { name: "Menu Nugget", price: 45, desc: "Nuggets croustillants + frites + sauce" },
      { name: "Menu Box", price: 55, desc: "Box poulet + frites + sauce maison" },
      { name: "Plat Wings", price: 50, desc: "Ailes de poulet épicées + frites" },
      { name: "Twister Mix", price: 55, desc: "Mix nuggets, wings, strips + frites" },
      { name: "Strips Meal", price: 50, desc: "Strips croustillants + frites + dip" },
      { name: "Griade Mix", price: 60, desc: "Grillades mixtes + frites + salade" },
      { name: "Moitié Moitié", price: 60, desc: "Pizza au choix + plat de frites" },
      { name: "Menu Cordon Bleu", price: 50, desc: "Cordon bleu + frites + sauce" },
      { name: "Trio Viand Hachée", price: 50, desc: "3 pièces viande hachée + frites" },
      { name: "Trio Chicken", price: 40, desc: "3 pièces poulet croustillant + frites" },
      { name: "Super Colombo", price: 55, desc: "Colombo poulet + frites + sauce" },
      { name: "Cheese Fries Crispy", price: 35, desc: "Frites gratinées au cheddar fondu" },
    ]
  },
  pizza: {
    label: "Pizza Menu",
    icon: "🍕",
    badge: "Fait maison",
    items: [
      { name: "Pizza Margherita", price: 35, img: "images/pizza_margherita.jpg" },
      { name: "Pizza Végétarienne", price: 40, desc: "Sauce tomate, mozzarella, champignons, olives, brocolis" },
      { name: "Pizza Pepperoni", price: 45, desc: "Sauce tomate, mozzarella, pepperoni" },
      { name: "Pizza Carbonara", price: 45, desc: "Sauce blanche, mozzarella, dinde fumée, champignons, œuf" },
      { name: "Pizza 4 Fromages", price: 50, desc: "Sauce blanche, mozzarella, emmental, bleu, edam" },
      { name: "Pizza Thon", price: 50, desc: "Sauce tomate, mozzarella, thon, oignons" },
      { name: "Pizza Poulet", price: 50, desc: "Sauce tomate, mozzarella, poivrons, olives, champignons" },
      { name: "Pizza Viand Hachée", price: 50, desc: "Sauce tomate, mozzarella, viande hachée, champignons" },
      { name: "Pizza Crunchy", price: 55, desc: "Sauce tomate, mozzarella, poulet crunchy, sauce BBQ" },
      { name: "Pizza Royal", price: 55, desc: "Sauce tomate, pepperoni, viande hachée, dinde fumée, champignons" },
      { name: "Pizza 4 Season", price: 60, desc: "Sauce tomate, poulet, viande hachée, fruits de mer, dinde" },
      { name: "Pizza Fruit de Mer", price: 60, desc: "Sauce tomate, crevettes, calamars, champignons, origan" },
      { name: "Pizza Twister", price: 65, desc: "Sauce rose, mozzarella, fruits de mer, pepperoni, cheddar" },
    ]
  },
  tacos: {
    label: "Tacos",
    icon: "🌯",
    badge: "Top vente",
    items: [
      { name: "Tacos CR7", price: 30, desc: "Le classique — poulet, sauce maison" },
      { name: "Tacos Poulet", price: 35, desc: "Poulet grillé, légumes, sauce maison" },
      { name: "Tacos Crispy", price: 35, desc: "Poulet croustillant, sauce crispy" },
      { name: "Tacos Nugget", price: 36, desc: "Nuggets, fromage, sauce" },
      { name: "Tacos Jonbo", price: 37, desc: "Jumbo size — poulet + garniture" },
      { name: "Tacos Cordon Bleu", price: 37, desc: "Cordon bleu, fromage fondu" },
      { name: "Tacos Royal", price: 37, desc: "Poulet, merguez, sauce royale" },
      { name: "Tacos Viand Hachée", price: 37, desc: "Viande hachée épicée, légumes" },
      { name: "Tacos Mix", price: 40, desc: "Poulet + merguez + légumes" },
      { name: "Tacos Buffalo", price: 40, desc: "Poulet crispy, sauce buffalo épicée" },
      { name: "Tacos Twister", price: 45, desc: "Spécialité maison — garniture premium" },
      { name: "Tacos Loco XL", price: 55, desc: "XL — viande, fromage, triple sauce" },
      { name: "Tacos Special XL", price: 65, desc: "XL premium — le plus grand de la carte" },
    ]
  },
  burger: {
    label: "Burgers",
    icon: "🍔",
    badge: "Gourmet",
    items: [
      { name: "Cheese Burger", price: 35, desc: "Steak, cheddar fondu, salade, tomate" },
      { name: "Burger Twis", price: 35, desc: "Burger signature Twister Family" },
      { name: "Egg Burger", price: 38, desc: "Steak, œuf, fromage, sauce maison" },
      { name: "King Burger", price: 38, desc: "Double steak, double fromage, sauce BBQ" },
      { name: "Big Boss", price: 45, desc: "Triple steak, cheddar, oignons caramélisés" },
      { name: "French Chicken", price: 45, desc: "Poulet croustillant, sauce française" },
      { name: "Buffalo Chicken", price: 50, desc: "Poulet buffalo épicé, sauce crémeuse" },
    ]
  },
  panini: {
    label: "Panini",
    icon: "🥪",
    items: [
      { name: "Panini Merguez", price: 25, desc: "Merguez grillée, fromage, légumes" },
      { name: "Panini Poulet", price: 30, desc: "Poulet grillé, salade, sauce maison" },
      { name: "Panini Crispy", price: 35, desc: "Poulet croustillant, sauce crispy" },
      { name: "Panini Viand Hachée", price: 36, desc: "Viande hachée épicée, fromage" },
      { name: "Panini Mix", price: 40, desc: "Poulet + merguez + garniture complète" },
    ]
  },
  sandwich: {
    label: "Sandwichs & Wraps",
    icon: "🥖",
    items: [
      { name: "B3a9lo (Sandwich)", price: 25, desc: "Sandwich classique garni" },
      { name: "Sandwich Merguez", price: 25, desc: "Merguez grillée, légumes" },
      { name: "Mega Chicken", price: 35, desc: "Poulet XXL, garniture maison" },
      { name: "Sandwich Poulet", price: 35, desc: "Poulet grillé, salade, tomate" },
      { name: "Sandwich Viand Hachée", price: 38, desc: "Viande hachée, fromage, légumes" },
      { name: "Sandwich Mix", price: 40, desc: "Poulet + merguez, garniture complète" },
      { name: "Wrap Poulet", price: 35, desc: "Tortilla, poulet, légumes, sauce" },
      { name: "Wrap Crispy", price: 37, desc: "Tortilla, poulet crispy, sauce" },
      { name: "Wrap Viand Hachée", price: 40, desc: "Tortilla, viande hachée, fromage" },
      { name: "Wrap Maison", price: 40, desc: "Spécialité maison, garniture premium" },
      { name: "Wrap Mix", price: 45, desc: "Tortilla, poulet + merguez + légumes" },
    ]
  },
  boisson: {
    label: "Boissons",
    icon: "🥤",
    items: [
      { name: "Aquafina (eau)", price: 10, desc: "Bouteille d'eau minérale 50cl" },
      { name: "Pepsi", price: 10, desc: "Canette Pepsi 33cl" },
      { name: "Coca-Cola", price: 10, desc: "Canette Coca-Cola 33cl" },
      { name: "Fanta", price: 10, desc: "Canette Fanta orange 33cl" },
    ]
  },
  kids: {
    label: "Kids Menu",
    icon: "👶",
    badge: "Pour enfants",
    items: [
      { name: "Kids Cheese Burger", price: 40, desc: "Cheese Burger + frites + jus d'orange" },
      { name: "Kids Nugget Menu", price: 40, desc: "4 Nuggets + frites + jus d'orange" },
    ]
  }
};

// ─── CART ────────────────────────────────────────────────────
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price, id: Date.now() + Math.random() });
  updateCart();
  showToast(`✅ ${name} ajouté !`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const count = cart.length;
  document.getElementById('navCartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (count === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><p>🍽</p><p>Votre panier est vide</p></div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';
  const total = cart.reduce((s, i) => s + i.price, 0);
  totalEl.textContent = `${total} DH`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-name">${item.name}</div>
      <div class="ci-price">${item.price} DH</div>
      <button class="ci-remove" onclick="removeFromCart(${item.id})" title="Retirer">✕</button>
    </div>
  `).join('');
}

function orderWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price, 0);
  const lines = cart.map(i => `• ${i.name} — ${i.price} DH`).join('\n');
  const msg = `🛒 *Commande Twister Family*\n\n${lines}\n\n💰 *Total: ${total} DH*\n\n📍 Livraison à Kénitra`;
  window.open(`https://wa.me/212677766387?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── MENU RENDERING ──────────────────────────────────────────
let currentCat = 'plats';

function renderMenuGrid(cat) {
  const grid = document.getElementById('menuGrid');
  const data = menuData[cat];
  if (!data) return;

  // Show first 6 items as cards
  const items = data.items.slice(0, 6);
  const hasMore = data.items.length > 6;

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card fade-in" style="animation-delay:${i * 0.07}s" onclick="openModal('${cat}')">
      <span class="menu-card-icon">${data.icon}</span>
      ${data.badge ? `<div class="menu-card-badge">${data.badge}</div>` : ''}
      <div class="menu-card-name">${item.name}</div>
      <div class="menu-card-desc">${item.desc}</div>
      <div class="menu-card-footer">
        <span class="menu-card-price">${item.price} DH</span>
        <button class="menu-card-btn" onclick="event.stopPropagation(); addToCart('${item.name}', ${item.price})">+</button>
      </div>
    </div>
  `).join('') + (hasMore ? `
    <div class="menu-card fade-in" style="animation-delay:${items.length * 0.07}s; cursor:pointer; border-style:dashed; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; min-height:200px;" onclick="openModal('${cat}')">
      <span style="font-size:2.5rem">👁</span>
      <div style="font-weight:700; font-size:1rem;">Voir tout ${data.label}</div>
      <div style="font-size:0.8rem; color:var(--grey);">${data.items.length} items disponibles</div>
    </div>
  ` : '');
}

// ─── MODAL ───────────────────────────────────────────────────
function openModal(cat) {
  const data = menuData[cat];
  if (!data) return;

  document.getElementById('modalIcon').textContent = data.icon;
  document.getElementById('modalTitle').textContent = data.label;

  document.getElementById('modalItems').innerHTML = data.items.map(item => `
    <div class="modal-item">
      <div class="mi-info">
        <div class="mi-name">${item.name}</div>
        <div class="mi-desc">${item.desc}</div>
      </div>
      <div class="mi-right">
        <span class="mi-price">${item.price} DH</span>
        <button class="mi-add" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})" title="Ajouter">+</button>
      </div>
    </div>
  `).join('');

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ─── CART SIDEBAR ────────────────────────────────────────────
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
    background: var(--dark2); border: 1px solid var(--gold);
    color: var(--white); padding: 12px 24px; border-radius: 99px;
    font-size: 0.85rem; font-weight: 600; z-index: 9999;
    animation: fadeUp 0.3s ease both;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    white-space: nowrap;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ─── NAVBAR SCROLL ───────────────────────────────────────────
function handleNavScroll() {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}

// ─── INTERSECTION OBSERVER ───────────────────────────────────
function initObserver() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('fade-in');
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.super-card, .contact-item').forEach(el => observer.observe(el));
}

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1600);

  // Navbar scroll
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Category tabs
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCat = tab.dataset.cat;
      renderMenuGrid(currentCat);
    });
  });

  // Initial render
  renderMenuGrid('plats');

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Cart
  document.getElementById('navCartBtn').addEventListener('click', e => {
    e.preventDefault();
    openCart();
  });
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('whatsappOrder').addEventListener('click', orderWhatsApp);
  document.getElementById('clearCart').addEventListener('click', clearCart);

  // Observer
  initObserver();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Keyboard: Escape closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeCart();
  }
});
