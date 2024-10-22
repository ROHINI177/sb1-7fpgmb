// Initialize Lucide icons
lucide.createIcons();

// Simulated user data (replace with actual backend integration)
const users = [
    { username: 'demo', password: 'password' }
];

// DOM Elements
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const homePage = document.getElementById('home-page');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const logoutButton = document.getElementById('logout');
const navLinks = document.querySelectorAll('nav a');

// Show Register Page
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginPage.classList.remove('active');
    registerPage.classList.add('active');
});

// Show Login Page
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerPage.classList.remove('active');
    loginPage.classList.add('active');
});

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loginPage.classList.remove('active');
        homePage.classList.add('active');
    } else {
        alert('Invalid username or password');
    }
});

// Register Form Submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // In a real application, you would send this data to a server
    users.push({ username, password });
    alert('Registration successful! Please log in.');
    registerPage.classList.remove('active');
    loginPage.classList.add('active');
});

// Logout
logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    loginPage.classList.add('active');
});

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(`${pageId}-page`).classList.add('active');
        }
    });
});

// Contact Form Submission (simulated)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
}