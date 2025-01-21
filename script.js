let slideIndex = 1;
let autoSlideInterval;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    slides.forEach(slide => (slide.style.display = 'none'));
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the current slide
    slides[slideIndex - 1].style.display = 'block';
    
    // Add active class to the current dot
    dots[slideIndex - 1].classList.add('active');
}

// For navigation buttons (arrows)
function moveSlide(n) {
    clearInterval(autoSlideInterval); // Reset auto-slide on manual navigation
    showSlide((slideIndex += n));
    startAutoSlide(); // Restart auto-slide
}

// For dots
function currentSlide(n) {
    clearInterval(autoSlideInterval); // Reset auto-slide on dot click
    showSlide((slideIndex = n));
    startAutoSlide(); // Restart auto-slide
}

// Auto-Sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide((slideIndex += 1));
    }, 5000); // Slide changes every 5 seconds
}

// Initial setup to show the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startAutoSlide();
});
document.querySelector(".all-products-btn").addEventListener("click", function () {
    window.location.href = "products.html"; // Update the URL to match your products page
  });
 // All Services Button
 document.querySelector(".all-services-btn").addEventListener("click", function () {
    window.location.href = "services.html"; // Create and link your services page
  });

  // All Blogs Button
  document.querySelector(".all-blogs-btn").addEventListener("click", function () {
    window.location.href = "blogs.html"; // Create and link your blogs page
  });  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");
  
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100; // Adjust the speed by changing this divisor
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20); // Adjust the speed by changing this timeout
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
    