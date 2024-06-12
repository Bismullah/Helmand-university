const universitiesApiUrl = 'http://universities.hipolabs.com/search';
const universityContainer = document.querySelector('.university-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function displayUniversities(universities) {
  universityContainer.innerHTML = '';

  universities.forEach(university => {
    const universityCard = document.createElement('div');
    universityCard.classList.add('university-card');

    const logo = document.createElement('img');
    logo.src = university.logo || 'default-logo.png'; // Use a default logo if no logo is available
    logo.alt = `${university.name} logo`;

    const name = document.createElement('h3');
    name.textContent = university.name;

    const country = document.createElement('p');
    country.textContent = `Country: ${university.country}`;

    const web = document.createElement('p');
    web.textContent = `Website: ${university.web_pages[0]}`;

    universityCard.appendChild(logo);
    universityCard.appendChild(name);
    universityCard.appendChild(country);
    universityCard.appendChild(web);
    universityContainer.appendChild(universityCard);
  });
}

function fetchUniversities(query = '') {
  let url = universitiesApiUrl;
  if (query) {
    url += `?name=${encodeURIComponent(query)}`;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayUniversities(data);
    })
    .catch(error => {
      console.error('Error fetching university data:', error);
      universityContainer.innerHTML = '<p>Error fetching university data.</p>';
    });
}

searchBtn.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim();
  fetchUniversities(searchQuery);
});

// Fetch universities on page load
fetchUniversities();