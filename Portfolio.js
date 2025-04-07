const modal = document.getElementById('default-modal');
const modalToggle = document.querySelector('[data-modal-toggle]');

// Show modal
modalToggle.addEventListener('click', () => {
  modal.classList.remove('hidden');  // Remove 'hidden' to display the modal
});

// Close modal
const closeModalButton = document.querySelector('[data-modal-hide]');
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');  // Add 'hidden' to hide the modal
});
