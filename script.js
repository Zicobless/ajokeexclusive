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

const whatsappNumber = '2349021570967';
let cartItems = [];

// Product database with images and details
const products = {
  'Breed my man oud 50ml.': {
    image: 'breed-my-man-oud-50ml-24k.jpeg',
    price: '₦24,000',
    description: 'EAU DE PARFUME'
  },
  '24k 30ml': {
    image: '24k-bleu-nuit-30ml-24k.jpeg',
    price: '₦3,000',
    description: 'Bleu Nuit'
  },
  'Avant 100ml': {
    image: 'avant-100ml-20k.jpeg',
    price: '₦20,000',
    description: 'EAU DA PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  'Ashantee fragrance 100ml': {
    image: 'ashantee-floral-and-far-away-100ml-6k.jpeg',
    price: '₦6,000',
    description: 'Floral & Far Away '
  },
  'Angham by Lattafa 100ml': {
    image: 'angham-by-lattafa-40k.jpeg',
    price: '₦40,000',
    description: 'Bright peony, saffron and powdery patchouli.'
  },
  'Coco Vanilla': {
    image: 'coco-vanilla-100ml-18k-39ml-6500.jpeg',
    price: '₦100ml 18,000 / 39ml ₦6,500',
    description: 'EAU DE PARFUME'
  },
  'Ramz Smart Collection': {
    image: 'ramz-smart-collection-100ml-10k.jpeg',
    price: '₦10,000',
    description: 'EAU DE PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  'Tesori D orinte 100ml': {
    image: 'tesori-can-100ml-6500.jpeg',
    price: '₦6,500',
    description: 'AROMATIC PERFUME.'
  },
  'Khamarah Smart Collection': {
    image: 'khamarah-smart-collection-100ml-10k.jpeg',
    price: '₦10,000',
    description: 'EAU DE PARFUME \n VAPORISTEUR-NATURAL SPRAY'
  },
  '24k White 100ml': {
    image: '24k-white-100ml-7k-30ml-3k.jpeg',
    price: '₦7,000 100ml / ₦3,000 30ml',
    description: 'EAU DE PARFUME'
  },
  'Marshmallow Collection 65ml': {
    image: 'marshmallow-collection-65ml-17k.jpeg',
    price: '₦17,000',
    description: 'Crimson Bloom + Amber Lace.'
  },
  'Layal Oil Perfume': {
    image: 'layal-oil-perfume.jpeg',
    price: '₦1,500',
    description: 'GREEN, PINK, RED, BLUE'
  },
  'Ameer Oudh Spray 50ml': {
    image: 'ameer oudh spray 50ml ameer perfume 13,500 combo.jpg',
    price: '₦13,500',
    description: 'Ameer perfume combo'
  },
  'Asad Bourbon + Hayaaty 50ml': {
    image: 'asad bourbon 50ml, 50ml hayaaty (blue) 16k combo.jpg',
    price: '₦16,000',
    description: 'Dual fragrance combo pack'
  },
  'Mosuf Brown Combo': {
    image: 'mosuf brown 50ml, naseem oil 24ml, riggs body spray 200ml 14,500 combo.jpg',
    price: '₦14,500',
    description: 'Perfume, oil, and body spray bundle'
  },
  'Hayaaty by Official 300ml': {
    image: 'hayaaty.jpeg',
    price: '₦6,500',
    description: 'Signature body mist with floral depth.'
  },
  'Monogotas Body Mist 100ml': {
    image: 'monogotas-100ml-body-mist-4k.jpeg',
    price: '₦4,000',
    description: 'Fresh body mist for long-lasting fragrance.'
  },
  'Juicy Crush Body Mist': {
    image: 'juicy-crush-body-mist-2500.jpeg',
    price: '₦2,500',
    description: 'Sweet and fruity scent with juicy allure.'
  },
  'Hand Cream': {
    image: 'hand-cream-1k.jpeg',
    price: '₦1,000',
    description: 'Creamy hand moisturizer for soft skin.'
  },
  'Enchanteur': {
    image: 'enchantur-roll-on.jpeg',
    price: '₦2,500',
    description: 'Floral roll-on fragrance with luminous charm.'
  }
  ,
  '24k Series Black, White, Red': {
    image: '24k series black, white, red 100ml 7k.jpg',
    price: '₦7,000',
    description: '24k series bundle.'
  },
  '9PM Black Elixr Rebel 50ml': {
    image: '9pm black,elixr, rebel 50ml 10k.jpg',
    price: '₦10,000',
    description: 'Masculine bold scent.'
  },
  'Active Woman 80ml': {
    image: 'active woman 80ml 14k.jpg',
    price: '₦14,000',
    description: 'Vibrant feminine fragrance.'
  },
  'Breed My Man 50ml': {
    image: 'breed-my-man-50ml-25k.jpeg',
    price: '₦25,000',
    description: 'Premium men fragrance.'
  },
  'Confetti Spray + Hand Cream': {
    image: 'confetti spray 200ml hand cream   combo.jpg',
    price: 'Price on request',
    description: 'Bundle: confetti spray and hand cream.'
  },
  'Confetti + Naseem + Pistachio': {
    image: 'confetti spray 200ml, naseem oil 24ml, pistachio crush 12,500 combo.jpg',
    price: '₦12,500',
    description: 'Triple bundle.'
  },
  'Cosmo Roll On': {
    image: 'cosmo roll on 3,500.jpg',
    price: '₦3,500',
    description: 'Compact roll-on fragrance.'
  },
  'Hannah Secret 100ml': {
    image: 'hannah secret 100ml 8k.jpg',
    price: '₦8,000',
    description: 'Delicate and lasting scent.'
  },
  'Interesting She 50ml': {
    image: 'interesting she 50ml 5k.jpg',
    price: '₦5,000',
    description: 'Playful feminine fragrance.'
  },
  'Kaly 50ml': {
    image: 'kaly 50ml 11k.jpg',
    price: '₦11,000',
    description: 'Elegant scent for evenings.'
  },
  'Men Premium': {
    image: 'men 33k.jpg',
    price: '₦33,000',
    description: 'High-end men fragrance.'
  },
  'Mosuf Spray + Oil + Perfume': {
    image: 'mosuf spray 200ml, mosuf oil 5ml, 50ml mosuf perfume 10,500.jpg',
    price: '₦10,500',
    description: 'Complete Mosuf bundle.'
  },
  'Official Crystal Series 35ml': {
    image: 'official crystal series 35ml 5k.jpg',
    price: '₦5,000',
    description: 'Crystal series roll-on.'
  },
  'Uploaded Scent Image 1': {
    image: 'WhatsApp Image 2026-06-05 at 5.55.07 PM.jpeg',
    price: 'Ask',
    description: 'New uploaded scent image.'
  },
  'Uploaded Scent Image 2': {
    image: 'WhatsApp Image 2026-06-05 at 5.55.08 PM (1).jpeg',
    price: 'Ask',
    description: 'New uploaded scent image.'
  },
  'Uploaded Scent Image 3': {
    image: 'WhatsApp Image 2026-06-05 at 5.55.08 PM.jpeg',
    price: 'Ask',
    description: 'New uploaded scent image.'
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
  const query = productSearch?.value.toLowerCase().trim() || '';
  
  // Update active nav buttons with highlight
  navFilterLinks.forEach(link => {
    if (link.dataset.filter === filter) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Get all category sections
  const womenSection = document.getElementById('womenSection');
  const menSection = document.getElementById('menSection');
  const unisexSection = document.getElementById('unisexSection');
  const comboSection = document.getElementById('comboSection');
  const homeGallery = document.getElementById('homeGallery');
  const searchPanel = document.querySelector('.search-panel');
  
  // Get all sections
  const allSections = [womenSection, menSection, unisexSection, comboSection];
  
  // HOME: Show all products from all categories
  if (filter === 'all') {
    // Hide search panel on home
    if (searchPanel) searchPanel.style.display = 'none';
    
    // Show home gallery with all products
    if (homeGallery) {
      homeGallery.style.display = 'block';
      homeGallery.classList.remove('section-hidden');
    }
    
    // Hide all individual category sections
    allSections.forEach(section => {
      if (section) {
        section.style.display = 'none';
        section.classList.add('section-hidden');
      }
    });
    
    // Show all products in home gallery
    const allHomeProducts = homeGallery?.querySelectorAll('[data-category]');
    allHomeProducts?.forEach((card, index) => {
      card.style.display = '';
      card.classList.remove('hidden');
      setTimeout(() => card.classList.add('fade-in'), index * 15);
    });
  } 
  // CATEGORY SPECIFIC: Show only the selected category
  else {
    // Show search panel on category pages
    if (searchPanel) searchPanel.style.display = 'grid';
    
    // Hide home gallery
    if (homeGallery) {
      homeGallery.style.display = 'none';
      homeGallery.classList.add('section-hidden');
    }
    
    // Hide all sections first
    allSections.forEach(section => {
      if (section) {
        section.style.display = 'none';
        section.classList.add('section-hidden');
      }
    });
    
    // Show only the selected category section
    let activeSection = null;
    if (filter === 'women' && womenSection) {
      activeSection = womenSection;
    } else if (filter === 'men' && menSection) {
      activeSection = menSection;
    } else if (filter === 'unisex' && unisexSection) {
      activeSection = unisexSection;
    } else if (filter === 'combo' && comboSection) {
      activeSection = comboSection;
    }
    
    if (activeSection) {
      activeSection.style.display = 'block';
      activeSection.classList.remove('section-hidden');
      
      // Animate products in the active section
      const products = activeSection.querySelectorAll('[data-category]');
      products.forEach((card, index) => {
        const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
        if (matchesQuery) {
          card.style.display = '';
          card.classList.remove('hidden');
          setTimeout(() => card.classList.add('fade-in'), index * 15);
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    }
  }
  
  updateHeader(filter);
}

function searchProducts() {
  // Get the currently active filter from nav links
  const activeLink = Array.from(navFilterLinks).find(link => link.classList.contains('active'));
  const currentFilter = activeLink?.dataset.filter || 'all';
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

function updateHeader(filter) {
  // No headers to update in new structure
  return;
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
    event.preventDefault();
    const filter = link.dataset.filter;
    if (!filter) return;
    
    // Clear search
    if (productSearch) {
      productSearch.value = '';
    }
    
    // Apply filter
    filterProducts(filter);
    
    // Scroll to appropriate section
    let targetSection = null;
    if (filter === 'all') {
      targetSection = document.getElementById('homeGallery');
    } else if (filter === 'unisex') {
      targetSection = document.getElementById('unisexSection');
    } else if (filter === 'combo') {
      targetSection = document.getElementById('comboSection');
    } else if (filter === 'women') {
      targetSection = document.getElementById('womenSection');
    } else if (filter === 'men') {
      targetSection = document.getElementById('menSection');
    }
    
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    
    // Close mobile menu
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
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
  const wlink = e.target.closest('.whatsapp-link');
  if (wlink) {
    e.preventDefault();
    const msg = wlink.dataset.message || '';
    openWhatsApp(msg);
    return;
  }

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

// Initialize on page load - show all products
document.addEventListener('DOMContentLoaded', () => {
  // Populate home gallery with all products from all categories
  populateHomeGallery();
  
  // Show home by default
  filterProducts('all');
  
  // Set Home as active on initial load
  const homeLink = Array.from(navFilterLinks).find(link => link.dataset.filter === 'all');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});

// Function to populate home gallery with all products
function populateHomeGallery() {
  const homeGallery = document.getElementById('homeGallery');
  if (!homeGallery) return;
  
  const galleryGrid = homeGallery.querySelector('.gallery-grid');
  if (!galleryGrid) return;
  
  // Get all products from category sections
  const womenProducts = document.querySelectorAll('#womenSection .product-card');
  const menProducts = document.querySelectorAll('#menSection .product-card');
  const unisexProducts = document.querySelectorAll('#unisexSection .product-card');
  const comboProducts = document.querySelectorAll('#comboSection .product-card');
  
  // Clear existing content
  galleryGrid.innerHTML = '';
  
  // Clone and add all products to home gallery
  const allProducts = [...womenProducts, ...menProducts, ...unisexProducts, ...comboProducts];
  allProducts.forEach(product => {
    const clone = product.cloneNode(true);
    galleryGrid.appendChild(clone);
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 960 && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  }
});

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
