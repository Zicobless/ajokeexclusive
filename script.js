const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const productSearch = document.getElementById('productSearch');
const filterButtons = document.querySelectorAll('.filter-button');
const productCards = document.querySelectorAll('.product-card');
const whatsappFloat = document.getElementById('whatsappFloat');
const whatsappLinks = document.querySelectorAll('.whatsapp-link');
const navFilterLinks = document.querySelectorAll('a[data-filter]');
const cartButton = document.getElementById('cartButton');
const cartSummary = document.getElementById('cartSummary');
const cartItemCount = document.getElementById('cartItemCount');
const cartItemsList = document.getElementById('cartItemsList');
const whatsappCheckout = document.getElementById('whatsappCheckout');
const productTitle = document.getElementById('productTitle');
const productSubtitle = document.getElementById('productSubtitle');
const timerValue = document.getElementById('timerValue');

const whatsappNumber = '2349021570967';
let cartItems = [];

// Product database with images and details
const products = {
  'Breed my man oud 50ml.': {
    image: 'breed my man oud 50ml 24k.jpeg',
    price: '₦24,000',
    description: 'EAU DE PARFUME'
  },
  '24k 30ml': {
    image: '24k bleu nuit 30ml 24k.jpeg',
    price: '₦3,000',
    description: 'Bleu Nuit'
  },
  'Avant 100ml': {
    image: 'avant 100ml 20k.jpeg',
    price: '₦20,000',
    description: 'EAU DA PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  'Ashantee fragrance 100ml': {
    image: 'Ashantee fragrance 100ml 6k.jpeg',
    price: '₦6,000',
    description: 'Floral & Far Away '
  },
  'Angham by Lattafa 100ml': {
    image: 'Angham by lattafa 40k.jpeg',
    price: '₦40,000',
    description: 'Bright peony, saffron and powdery patchouli.'
  },
  'Coco Vanilla': {
    image: 'coco vanilla 100ml 18k 39ml 6500.jpeg',
    price: '₦100ml 18,000 / 39ml ₦6,500',
    description: 'EAU DE PARFUME'
  },
  'Ramz Smart Collection': {
    image: 'ramz smart collection 100ml 10k.jpeg',
    price: '₦10,000',
    description: 'EAU DE PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  'Tesori D orinte 100ml': {
    image: 'tesori can 100ml 6500.jpeg',
    price: '₦6,500',
    description: 'AROMATIC PERFUME.'
  },
  'Khamarah Smart Collection': {
    image: 'khamarah smart collection 100ml 10k.jpeg',
    price: '₦10,000',
    description: 'EAU DE PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  '24k White 100ml': {
    image: '24k white 100ml 7k 30ml 3k.jpeg',
    price: '₦7,000 100ml / ₦3,000 30ml',
    description: 'EAU DE PARFUME'
  },
  'Marshmallow Collection 65ml': {
    image: 'marshmallow collection 65ml 17K.jpeg',
    price: '₦17,000',
    description: 'Crimson Bloom + Amber Lace.'
  },
  'Layal Oil Perfume': {
    image: 'Layal oil perfume.jpeg',
    price: '₦1,500',
    description: 'GREEN, PINK, RED, BLUE'
  }
};
const categoryDetails = {
  all: {
    title: 'All Signature Scents',
    subtitle: 'A curated range of perfumes designed to inspire confidence, attraction, and luxury.',
  },
  men: {
    title: 'Men Perfume',
    subtitle: 'Bold aromas for the confident man—cedar, oud, leather and citrus blends.',
  },
  women: {
    title: 'Women Perfume',
    subtitle: 'Soft, glamorous fragrances for every elegant moment.',
  },
  hot: {
    title: 'Hot Sales',
    subtitle: 'Trending scents with premium appeal and limited availability.',
  },
  combo: {
    title: 'Combo Sales',
    subtitle: 'Curated bundle deals with extra savings and luxury pairing.',
  },
  unisex: {
    title: 'Unisex Scents',
    subtitle: 'Balanced fragrances designed for everyone.',
  },
};

function toggleMenu() {
  navMenu.classList.toggle('open');
}

function updateHeader(filter) {
  const details = categoryDetails[filter] || categoryDetails.all;
  productTitle.textContent = details.title;
  productSubtitle.textContent = details.subtitle;
}

function filterProducts(filter) {
  const query = productSearch.value.toLowerCase().trim();
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
  productCards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    const matchesCategory = filter === 'all' || categories.includes(filter);
    const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
    card.style.display = matchesCategory && matchesQuery ? 'grid' : 'none';
  });
  updateHeader(filter);
  // show/hide the dedicated unisex section
  const unisexSection = document.getElementById('unisex');
  if (unisexSection) {
    unisexSection.style.display = filter === 'unisex' ? 'block' : 'none';
  }
}

function searchProducts() {
  const currentFilter = Array.from(filterButtons).find(btn => btn.classList.contains('active'))?.dataset.filter || 'all';
  filterProducts(currentFilter);
}

function openWhatsApp(message = '') {
  let orderText = 'Hello Ajoke Exclusive Scent, I want to place an order.';
  let hasProductLinks = false;
  
  if (cartItems.length > 0) {
    orderText = `Hello Ajoke Exclusive Scent! 👋\n\nI would like to order the following products:\n\n`;
    
    cartItems.forEach((item, index) => {
      const product = products[item];
      if (product) {
        orderText += `${index + 1}. *${item}* - ${product.price}\n   ${product.description}\n\n`;
        hasProductLinks = true;
      } else {
        orderText += `${index + 1}. ${item}\n\n`;
      }
    });
    
    if (message && !cartItems.includes(message)) {
      const product = products[message];
      if (product) {
        orderText += `Also include: *${message}* - ${product.price}\n${product.description}\n\n`;
      } else {
        orderText += `Also add: ${message}\n\n`;
      }
    }
  } else if (message) {
    const product = products[message];
    if (product) {
      orderText = `Hello Ajoke Exclusive Scent! 👋\n\nI'm interested in this product:\n\n*${message}*\n${product.description}\nPrice: ${product.price}\n\nPlease send more details and confirm availability.`;
    } else {
      orderText = `Hello Ajoke Exclusive Scent, I want to order this perfume: ${message}.`;
    }
  }
  
  orderText += `\n\nPlease confirm price, delivery time, and payment options.`;
  
  const encoded = encodeURIComponent(orderText);
  window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('visible'), 50);
  setTimeout(() => toast.classList.remove('visible'), 2600);
  setTimeout(() => toast.remove(), 3000);
}

navToggle?.addEventListener('click', toggleMenu);

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    if (productSearch) {
      productSearch.value = '';
    }
    filterProducts(filter);
  });
});

navFilterLinks.forEach(link => {
  link.addEventListener('click', event => {
    const filter = link.dataset.filter;
    if (!filter) return;
    if (filter !== 'all') {
      filterProducts(filter);
      productSearch.value = '';
    }
    const target = document.querySelector(link.getAttribute('href')) || document.body;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navMenu.classList.contains('open')) navMenu.classList.remove('open');
  });
});

productSearch?.addEventListener('input', searchProducts);

whatsappFloat?.addEventListener('click', event => {
  event.preventDefault();
  openWhatsApp('I would like assistance with my order');
});

whatsappLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    openWhatsApp(link.dataset.message);
  });
});

function updateCartUI() {

  const cartCount = cartButton && cartButton.querySelector('.cart-count');

  if (cartCount) {
    cartCount.textContent = cartItems.length;
  }

  if (cartItemCount) {
    cartItemCount.textContent = cartItems.length
      ? `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'} in cart`
      : 'No items in cart yet';
  }

  if (cartItems.length > 0) {

    const itemsList = cartItems.map((item, index) => {
      const product = products[item];

      return `${index + 1}. ${item}${product ? ` - ${product.price}` : ''}`;
    }).join(' • ');

    if (cartItemsList) {
      cartItemsList.textContent = itemsList;
    }

  } else {

    if (cartItemsList) {
      cartItemsList.textContent =
        'Add perfumes to your cart to order multiple items.';
    }
  }

  if (cartSummary) {
    cartSummary.classList.toggle('hidden', cartItems.length === 0);
  }
}


cartButton?.addEventListener('click', (event) => {
  event.preventDefault();

  if (!cartItems.length) {
    showToast('Your cart is empty. Add products to order multiple items.');
    return;
  }

  cartSummary?.classList.toggle('hidden');
});

// Add cart button using event delegation for dynamic buttons
document.addEventListener('click', function (e) {
  const button = e.target.closest('.add-cart');

  if (!button) return;

  const productName = button.dataset.product;

  if (!productName) return;

  if (!cartItems.includes(productName)) {
    cartItems.push(productName);
    showToast(`${productName} added to cart.`);
    updateCartUI();
  } else {
    showToast(`${productName} is already in your cart.`);
  }
});

whatsappCheckout?.addEventListener('click', () => {
  if (!cartItems.length) {
    showToast('Add items to your cart first.');
    return;
  }
  openWhatsApp();
});

updateCartUI();

const revealElements = document.querySelectorAll('.product-card, .glass-card, .testimonial-card, .newsletter, .contact__map');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  observer.observe(el);
});

function updateTimer() {
  const now = new Date();
  const end = new Date();
  end.setHours(now.getHours() + 4);
  const diff = end - now;
  if (diff <= 0) return;
  const hours = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor(diff % 3600000 / 60000)).padStart(2, '0');
  const seconds = String(Math.floor(diff % 60000 / 1000)).padStart(2, '0');
  timerValue.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

window.addEventListener('resize', () => {
  if (window.innerWidth > 960 && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  }
});

filterProducts('all');

// Product Modal Functionality
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.product-modal__overlay');
let currentProductName = '';

function openProductModal(productName) {
  const product = products[productName];
  if (!product) return;
  
  currentProductName = productName;
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalProductName').textContent = productName;
  document.getElementById('modalProductDescription').textContent = product.description;
  document.getElementById('modalProductPrice').textContent = product.price;
  
  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentProductName = '';
}

// Modal event listeners
modalClose.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', closeProductModal);

document.getElementById('modalWhatsappBtn').addEventListener('click', () => {
  openWhatsApp(currentProductName);
  closeProductModal();
});

document.getElementById('modalAddCartBtn').addEventListener('click', () => {

  if (!currentProductName) return;

  cartItems.push(currentProductName);

  showToast(`${currentProductName} added to cart.`);

  updateCartUI();

  closeProductModal();
});

// Add click handler to quickview buttons and product names
document.querySelectorAll('.quickview, .product-card__info h3').forEach(element => {
  element.style.cursor = 'pointer';
  element.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
      const productName = card.querySelector('h3').textContent;
      openProductModal(productName);
    }
  });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !productModal.classList.contains('hidden')) {
    closeProductModal();
  }
});
