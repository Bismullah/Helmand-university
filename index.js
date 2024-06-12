// Select all the navigation menu items
const navItems = document.querySelectorAll('nav li');

// Add event listeners to the navigation menu items
navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.querySelector('ul').style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('ul').style.display = 'none';
  });
});

// Get the current year for the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${currentYear} Helmand University. All rights reserved.`;

// Dummy news articles data
const newsArticles = [
  {
    title: 'Helmand University Hosts Annual Career Fair',
    url: '#',
  },
  {
    title: 'New Scholarships Available for International Students',
    url: '#',
  },
  {
    title: 'Campus Renovations Underway to Improve Student Experience',
    url: '#',
  },
  {
    title: 'Student-Led Initiative Launches Environmental Awareness Campaign',
    url: '#',
  },
];

// Display news articles
const newsList = document.getElementById('news-list');

newsArticles.forEach((article) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = article.url;
  link.textContent = article.title;
  listItem.appendChild(link);
  newsList.appendChild(listItem);
});

// Handle form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Simulate successful form submission
  alert('Message sent successfully!');
  form.reset();
});

// login code
// Get the modal
var modal = document.getElementById("login-modal");
var loginBtn = document.getElementById("login-btn");
var closeBtn = document.getElementsByClassName("close-btn")[0];
var loginForm = document.getElementById("login-form");
var logoutBtn = document.getElementById("logout-btn");

// When the user clicks the login button, open the modal
loginBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle login form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the username and password from the form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login logic here (e.g., send a request to the server)
  // For now, we'll just log the values to the console
  console.log("Username:", username);
  console.log("Password:", password);

  // Hide the login modal and show the logout button
  modal.style.display = "none";
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline";
});

// Handle logout button click
logoutBtn.addEventListener("click", function() {
  // Perform logout logic here (e.g., send a request to the server)

  // Show the login button and hide the logout button
  loginBtn.style.display = "inline";
  logoutBtn.style.display = "none";
});
