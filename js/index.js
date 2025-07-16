
  const cards = Array.from(document.querySelectorAll('.testimonial-card'));
    const dots = Array.from(document.querySelectorAll('.testimonials-pagination .dot'));
    let current = 0;
    let interval = null;
    const slideInterval = 4000;

    function getVisibleCount() {
      return window.innerWidth <= 900 ? 1 : 3;
    }

    function getMaxIndex() {
      const visibleCount = getVisibleCount();
      return Math.max(0, cards.length - visibleCount);
    }

    function showSlide(index) {
      const visibleCount = getVisibleCount();
      cards.forEach((card, i) => {
        if (i >= index && i < index + visibleCount) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function autoSlide() {
      const maxIndex = getMaxIndex();
      current = (current + 1) > maxIndex ? 0 : (current + 1);
      showSlide(current);
    }

    function startAutoSlide() {
      if (interval) clearInterval(interval);
      interval = setInterval(autoSlide, slideInterval);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
        startAutoSlide();
      });
    });

    window.addEventListener('resize', () => {
      // Clamp current index if needed
      const maxIndex = getMaxIndex();
      if (current > maxIndex) current = maxIndex;
      showSlide(current);
    });

    document.addEventListener('DOMContentLoaded', () => {
      showSlide(current);
      startAutoSlide();
    });
     const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
      acc.addEventListener('click', () => {
        accordions.forEach(el => {
          if (el !== acc) el.classList.remove('active');
        });
        acc.classList.toggle('active');
      });
    });
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('show');
    }

 const products = [
  {
    id: 1,
    category: 'gate',
    catLabel: 'Automatic Gate',
    title: 'Black Mild Steel Automatic Sliding Gate, For Home',
    desc: 'Reliable and durable sliding gate system for modern homes and businesses.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iAc1wLuvsRJczZ946tMb3nbtr2s9oau18g&s',
  },
  {
    id: 2,
    category: 'curtain',
    catLabel: 'Stage Motorised Curtain',
    title: 'Stage Motorised Curtain System',
    desc: 'Remote-controlled curtain movement ideal for auditoriums and theaters.',
    image: 'https://i.etsystatic.com/40538294/r/il/9bf832/4587529881/il_fullxfull.4587529881_75mt.jpg',
  },
  {
    id: 3,
    category: 'curtain',
    catLabel: 'Curtain & Blind',
    title: 'Curtain Motor & Blind Motor',
    desc: 'Automated curtain and blind solutions with smart home integration.',
    image: 'https://m.media-amazon.com/images/I/71V1mrEYATL._UF894,1000_QL80_.jpg',
  },
  {
    id: 4,
    category: 'barrier',
    catLabel: 'Security Barrier',
    title: 'Boom Barrier Gate System',
    desc: 'Ideal for parking and access control with boom arm automation.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXricAfNOcTOJRB_oH7AIWZ7E1ho6winlfRQ&s',
  },
  {
    id: 5,
    category: 'barrier',
    catLabel: 'Security Barrier',
    title: 'Flap Barrier Entry Control',
    desc: 'Smart flap barriers for secure access in offices and metros.',
    image: 'https://5.imimg.com/data5/NS/CC/UN/SELLER-16256827/access-control-flap-barrier.jpg'
  },
  {
    id: 6,
    category: 'gate',
    catLabel: 'Gate System',
    title: 'Telescopic Automatic Gate',
    desc: 'Space-saving gate design for commercial and residential use.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChk_miD3xwoCVA2oFrw99gBFV0Z6mKnj65Q&s'
  },
  {
    id: 7,
    category: 'shutter',
    catLabel: 'Rolling Shutter',
    title: 'Motorised Rolling Shutter',
    desc: 'Secure, motor-powered rolling shutters for industrial use.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmywiX81rAwIfInH5Cq5mIGP5z2Q_CbQfIQ&s"
  },
  {
    id: 8,
    category: 'garage',
    catLabel: 'Garage Door',
    title: 'Sectional Garage Door',
    desc: 'High-end sectional door solution for modern garages.',
    image: 'https://www.bestdoors.com.au/media/1090/slimline-min.jpg'
  },
  {
    id: 9,
    category: 'sensor',
    catLabel: 'Glass Sensor',
    title: 'Glass Door Sensor',
    desc: 'Infrared sensor system for automatic glass doors.',
    image: 'https://tiimg.tistatic.com/fp/1/007/269/automatic-glass-sensor-door-981.jpg'
    
  },
  {
    id: 10,
    category: 'gate',
    catLabel: 'Curved Gate',
    title: 'Automatic Curved Sliding Gate',
    desc: 'Stylish curved gate with automated opening/closing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2ER9WnROgs1qEpvQ7m5qe-Ylu0_Nk1lygA&s',
  },
  {
    id: 11,
    category: 'door',
    catLabel: 'High-Speed Door',
    title: 'High-Speed Industrial Door',
    desc: 'Fast action industrial doors for warehouse and logistics.',
    image: 'https://www.kone.com.au/Images/doors-highspeed-carousel-2-951x535_tcm46-15455.jpg?v=5'
  },
];

    
    const productsContainer = document.getElementById('portfolio-products');
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');

   
    function renderProducts(filter) {
    
      let filtered = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

     
      filtered = filtered

   
      productsContainer.innerHTML = filtered.map(prod => `
        <div class="portfolio-card">
          <div class="portfolio-card-img-container">
            <img src="${prod.image}" class="portfolio-card-img" alt="${prod.title}">
            <div class="portfolio-card-btns">
              <button class="portfolio-card-btn" title="View">
                <svg width="25" height="25" fill="none" stroke="#635bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M2.05 12A9.94 9.94 0 0 1 12 4.06a9.94 9.94 0 0 1 9.95 7.94 9.94 9.94 0 0 1-9.95 7.94A9.94 9.94 0 0 1 2.05 12z"></path>
                </svg>
              </button>
              <button class="portfolio-card-btn" title="Go">
                <svg width="25" height="25" fill="none" stroke="#635bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="portfolio-card-content">
            <div class="portfolio-card-category">${prod.catLabel.toUpperCase()}</div>
            <div class="portfolio-card-title">${prod.title}</div>
            <div class="portfolio-card-desc">${prod.desc}</div>
          </div>
        </div>
      `).join('');
    }

  
    renderProducts('all');

    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
   
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
  
        const filter = this.getAttribute('data-filter');
        renderProducts(filter);
      });
    });
  