function startCounting(element, target) {
  let current = 0; // Start from 0
  const interval = setInterval(() => {
    if (current < target) {
      current++;
      element.innerText = current + "+";
    } else {
      clearInterval(interval); // Stop when the target is reached
    }
  }, 200); // Adjust the speed of counting here (100ms between each increment)
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
        observer.unobserve(entry.target); // Stop observing once it's triggered
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is visible

// Start observing the div with the id "countDiv"
const countDivApp = document.getElementById("countDivApp");
observerApp.observe(countDivApp);

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(
    "#project-showcase .image-container img"
  );

  const handleScroll = () => {
    const section = document.getElementById("project-showcase");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add("visible");
        }, index * 340); // Add delay for each image
      });
    }
  };

  window.addEventListener("scroll", handleScroll);
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

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      img: "assets/img1.png",
      msg: '"I hired them to create an e-commerce site for my clothing store. The process was smooth, and the site looks amazing. My customers love it!"',
      name: "Professor Zimuzo Echezonachukwu",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?woman",
      msg: '"They built an app for our NGO, making it easier for donors to connect with us. The communication was clear, and the results exceeded our expectations!"',
      name: "Neha Verma",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?businessman",
      msg: '"I needed a portfolio website to showcase my photography, and they delivered exactly what I imagined. The design is sleek and professional!"',
      name: "Ravi Kumar",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://source.unsplash.com/80x80/?businesswoman",
      msg: '"I run a small bakery, and they created a custom ordering system for me. It’s easy to use and has boosted my sales significantly!"',
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
      setTimeout(erasePlaceholder, 2000); // Wait for a bit before erasing
    }
  }, 8); // Adjust typing speed here
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
      setTimeout(typePlaceholder, 80); // Wait before starting the next placeholder
    }
  }, 8); // Adjust erasing speed here
}

// Start typing the first placeholder
typePlaceholder();


// Function to set the selected plan
function selectPlan(planValue) {
  const selectInput = document.getElementById("service");
  selectInput.value = planValue; // Set the value of the select input
}