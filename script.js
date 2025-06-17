function startCounting(element, target) {
  let current = 0; // Start from 0
  const interval = setInterval(() => {
    if (current < target) {
      current++;
      element.innerText = current + "+";
    } else {
      clearInterval(interval); // Stop when the target is reached
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }, 200); // Adjust the speed of counting here (100ms between each increment)
=======
  }, 100); // Adjust the speed of counting here (100ms between each increment)
>>>>>>> 44cfa66 ( updated nabar)
=======
  }, 200); // Adjust the speed of counting here (100ms between each increment)
>>>>>>> cad8511 (committ)
}

// Create an intersection observer to detect when the element is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const h1Element = entry.target.querySelector("h1");
      if (entry.isIntersecting) {
        startCounting(h1Element, 15); // Start counting to 13 when in view
        observer.unobserve(entry.target); // Stop observing once it's triggered
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is visible

// Start observing the div with the id "countDiv"
const countDiv = document.getElementById("countDiv");
observer.observe(countDiv);

const observerApp = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const h1Element = entry.target.querySelector("h1");
      if (entry.isIntersecting) {
        startCounting(h1Element, 5); // Start counting to 13 when in view
<<<<<<< HEAD
<<<<<<< HEAD
        observer.unobserve(entry.target); // Stop observing once it's triggered
=======
        observerApp.unobserve(entry.target); // Stop observing once it's triggered
>>>>>>> 44cfa66 ( updated nabar)
=======
        observer.unobserve(entry.target); // Stop observing once it's triggered
>>>>>>> cad8511 (committ)
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is visible

// Start observing the div with the id "countDiv"
const countDivApp = document.getElementById("countDivApp");
observerApp.observe(countDivApp);

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
=======
// Enhanced project showcase animation
document.addEventListener("DOMContentLoaded", () => {
  // Enhanced Navbar Functionality
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll-based navbar styling
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (navbar) {
      // Add scrolled class for background change
      if (scrollTop > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide/show navbar on scroll (optional)
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
    }
    
    lastScrollTop = scrollTop;
  });

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Project showcase animation
>>>>>>> cad8511 (committ)
  const images = document.querySelectorAll(
    "#project-showcase .image-container img"
  );

  const handleScroll = () => {
    const section = document.getElementById("project-showcase");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

<<<<<<< HEAD
    if (sectionPosition < viewportHeight - 100) {
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add("visible");
<<<<<<< HEAD
        }, index * 340); // Add delay for each image
=======
        }, index * 200);
>>>>>>> 44cfa66 ( updated nabar)
=======
    if (sectionPosition < viewportHeight * 0.8) {
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add("visible");
        }, index * 340); // Add delay for each image
>>>>>>> cad8511 (committ)
      });
    }
  };

  window.addEventListener("scroll", handleScroll);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  handleScroll(); // Check on load
>>>>>>> 44cfa66 ( updated nabar)
});

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  loop: true,
  autoplay: {
<<<<<<< HEAD
    delay: 1000, // Time in milliseconds between automatic slides
    disableOnInteraction: false, // Keep autoplay running even after user interaction
=======
    delay: 3000,
    disableOnInteraction: false,
>>>>>>> 44cfa66 ( updated nabar)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      img: "assets/img1.png",
      msg: '"I hired them to create an e-commerce site for my clothing store. The process was smooth, and the site looks amazing. My customers love it!"',
=======

  // Testimonials functionality
  const testimonials = [
    {
      img: "https://source.unsplash.com/80x80/?businessman",
      msg: "I hired them to create an e-commerce site for my clothing store. The process was smooth, and the site looks amazing. My customers love it!",
>>>>>>> cad8511 (committ)
      name: "Professor Zimuzo Echezonachukwu",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?woman",
<<<<<<< HEAD
      msg: '"They built an app for our NGO, making it easier for donors to connect with us. The communication was clear, and the results exceeded our expectations!"',
=======
      msg: "They built an app for our NGO, making it easier for donors to connect with us. The communication was clear, and the results exceeded our expectations!",
>>>>>>> cad8511 (committ)
      name: "Neha Verma",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?businessman",
<<<<<<< HEAD
      msg: '"I needed a portfolio website to showcase my photography, and they delivered exactly what I imagined. The design is sleek and professional!"',
=======
      msg: "I needed a portfolio website to showcase my photography, and they delivered exactly what I imagined. The design is sleek and professional!",
>>>>>>> cad8511 (committ)
      name: "Ravi Kumar",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?businesswoman",
<<<<<<< HEAD
<<<<<<< HEAD
      msg: '"I run a small bakery, and they created a custom ordering system for me. It’s easy to use and has boosted my sales significantly!"',
=======
      msg: '"I run a small bakery, and they created a custom ordering system for me. It\'s easy to use and has boosted my sales significantly!"',
>>>>>>> 44cfa66 ( updated nabar)
=======
      msg: "I run a small bakery, and they created a custom ordering system for me. It's easy to use and has boosted my sales significantly!",
>>>>>>> cad8511 (committ)
      name: "Anjali Gupta",
      rating: "⭐⭐⭐⭐",
    },
  ];

  const container = document.querySelector(".testimonial-container");
  let index = 0;

  const updateTestimonial = () => {
    const { img, msg, name, rating } = testimonials[index];
    container.innerHTML = `
        <div class="testimonial">
        <div class="testimonial-name">- ${name}</div>
          <div class="testimonial-rating">${rating}</div>
          <p class="testimonial-msg">${msg}</p>
          
        </div>
      `;
    index = (index + 1) % testimonials.length; // Loop back to the first testimonial
  };

  // Initial testimonial
  updateTestimonial();

  // Change testimonial every 4 seconds
  setInterval(updateTestimonial, 4000);
});

<<<<<<< HEAD
=======
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  loop: true,
  autoplay: {
    delay: 1000, // Time in milliseconds between automatic slides
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});

>>>>>>> cad8511 (committ)
// Placeholder texts
const placeholders = [
  "Describe the type of project you'd like to create (e.g., website, mobile app, branding, etc.)",
  "Please provide a brief overview of your project (e.g., e-commerce site, social media app, logo design)",
  "Tell us about your project goals (e.g., custom website development, SEO strategy, graphic design)",
  "What kind of project are you interested in? (e.g., web design, software development, marketing campaign)",
  "Describe your project and its scope (e.g., blog site, mobile application, online store, branding)",
];

let currentPlaceholderIndex = 0;
const messageTextArea = document.getElementById("message");

function typePlaceholder() {
  const placeholderText = placeholders[currentPlaceholderIndex];

  // Erase the current placeholder text first
  messageTextArea.placeholder = "";

  // Start typing the new placeholder text
  let index = 0;
  let typingInterval = setInterval(() => {
    messageTextArea.placeholder += placeholderText.charAt(index);
    index++;
    if (index === placeholderText.length) {
      clearInterval(typingInterval);
<<<<<<< HEAD
<<<<<<< HEAD
      setTimeout(erasePlaceholder, 2000); // Wait for a bit before erasing
    }
  }, 8); // Adjust typing speed here
=======
      setTimeout(erasePlaceholder, 3000); // Wait for a bit before erasing
    }
  }, 50); // Adjust typing speed here
>>>>>>> 44cfa66 ( updated nabar)
=======
      setTimeout(erasePlaceholder, 2000); // Wait for a bit before erasing
    }
  }, 8); // Adjust typing speed here
>>>>>>> cad8511 (committ)
}

function erasePlaceholder() {
  const placeholderText = messageTextArea.placeholder;

  // Start erasing the current placeholder text
  let index = placeholderText.length;
  let erasingInterval = setInterval(() => {
    messageTextArea.placeholder = placeholderText.substring(0, index);
    index--;
    if (index < 0) {
      clearInterval(erasingInterval);
      currentPlaceholderIndex =
        (currentPlaceholderIndex + 1) % placeholders.length; // Cycle through the placeholders
<<<<<<< HEAD
<<<<<<< HEAD
      setTimeout(typePlaceholder, 80); // Wait before starting the next placeholder
    }
  }, 8); // Adjust erasing speed here
=======
      setTimeout(typePlaceholder, 1000); // Wait before starting the next placeholder
    }
  }, 30); // Adjust erasing speed here
>>>>>>> 44cfa66 ( updated nabar)
=======
      setTimeout(typePlaceholder, 80); // Wait before starting the next placeholder
    }
  }, 8); // Adjust erasing speed here
>>>>>>> cad8511 (committ)
}

// Start typing the first placeholder
typePlaceholder();


// Function to set the selected plan
function selectPlan(planValue) {
<<<<<<< HEAD
<<<<<<< HEAD
  const selectInput = document.getElementById("service");
  selectInput.value = planValue; // Set the value of the select input
}
=======
  const serviceSelect = document.getElementById("service");
  if (serviceSelect) {
    serviceSelect.value = planValue;
    serviceSelect.scrollIntoView({ behavior: "smooth" });
  }
}

// Enhanced Navbar Functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const features = document.querySelector(".features");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile navigation toggle
  if (mobileToggle && features) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      features.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const navLinks = features.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        features.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        mobileToggle.classList.remove("active");
        features.classList.remove("active");
      }
    });
  }

  // Smooth scrolling for navigation links
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

// Add CSS for enhanced navbar animations
const navbarStyles = document.createElement("style");
navbarStyles.textContent = `
  @keyframes slideInFromTop {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .nav-container {
    animation: slideInFromTop 0.6s ease-out;
  }

  .features a {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
  }

  .features a:nth-child(1) { animation-delay: 0.1s; }
  .features a:nth-child(2) { animation-delay: 0.2s; }
  .features a:nth-child(3) { animation-delay: 0.3s; }
  .features a:nth-child(4) { animation-delay: 0.4s; }

  .btn {
    animation: fadeInUp 0.6s ease-out 0.5s both;
  }

  .logo img {
    animation: fadeInUp 0.6s ease-out 0.1s both;
  }

  /* Enhanced hover effects */
  .features a:hover {
    transform: translateY(-3px);
    text-shadow: 0 0 10px rgba(31, 114, 242, 0.5);
  }

  .btn:hover {
    transform: translateY(-3px) scale(1.05);
  }

  /* Mobile menu animations */
  .features.active {
    animation: slideInFromTop 0.3s ease-out;
  }

  .mobile-nav-toggle span {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .mobile-nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-nav-toggle.active span:nth-child(2) {
    opacity: 0;
    transform: scale(0);
  }

  .mobile-nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`;

document.head.appendChild(navbarStyles);
>>>>>>> 44cfa66 ( updated nabar)
=======
  const selectInput = document.getElementById("service");
  selectInput.value = planValue; // Set the value of the select input
}
>>>>>>> cad8511 (committ)
