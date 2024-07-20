function openBtn(){
  document.getElementById('Mobile_nav').classList.remove("active")
}
function closeBtn(){
  document.getElementById('Mobile_nav').classList.add("active")
}


// JavaScript to handle image animation

const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function showNextImage() {
  // Remove 'active' class from current image
  images[currentIndex].classList.remove('active');
  
  // Increment index (loop back to start if at end)
  currentIndex = (currentIndex + 1) % images.length;
  
  // Add 'active' class to next image
  images[currentIndex].classList.add('active');
}

// Set an interval to change images every 3 seconds
setInterval(showNextImage, 3000); // Adjust timing (3000ms = 3 seconds)
