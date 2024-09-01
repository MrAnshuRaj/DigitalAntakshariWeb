// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Terms of Service Modal
const termsLink = document.querySelector('a[href="#terms"]');
const modal = document.getElementById('terms');
const closeButton = document.querySelector('.close-button');

termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
