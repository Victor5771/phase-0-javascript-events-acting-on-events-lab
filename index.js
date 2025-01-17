// Your code here
// Define the Dodger element
const dodger = document.getElementById('dodger');

// Add an event listener to move the Dodger left when the left arrow key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
});

// Add an event listener to move the Dodger right when the right arrow key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

// Define the moveDodgerLeft() function
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left) || 0;
  const newLeft = Math.max(left - 1, 0); 
  dodger.style.left = `${newLeft}px`; 
}

// Define the moveDodgerRight() function
function moveDodgerRight() {
  let left = parseInt(dodger.style.left) || 0; 
  const newLeft = Math.min(left + 1, 360);
  dodger.style.left = `${newLeft}px`; 
}
