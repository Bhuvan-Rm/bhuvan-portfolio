const projects = document.getElementById("projects");
const hamburgerMenu = document.getElementById('hamburger-icon')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
})


let userListItem = [];


// Determine the active section based on scroll position
function determineActiveSection() {
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');
  let activeSectionId = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
      activeSectionId = section.getAttribute('id');
    }
  });

  // Check if the active section is the footer
  if (!activeSectionId) {
    activeSectionId = footer.getAttribute('id');
  }

  return activeSectionId;
}

// Function to highlight the active navigation link
function highlightActiveLink() {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`.nav__link[href="#${activeSectionId}"]`);

  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Function to handle scroll event
function handleScroll() {
  activeSectionId = determineActiveSection();
  highlightActiveLink();
}

// Function to handle click event on navigation links
function handleNavClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add click event listener to the navigation links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
  link.addEventListener('click', handleNavClick);
});





window.onload = async function () {
  try {
    const response = await fetch(`https://api.github.com/users/Bhuvan-Rm/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();

    console.log("Repositories found: " + repos.length);

    let reposItems = "";
    for (let repo of repos) {
      reposItems += `
        <article class="card zoom">
          <h4 class="repo-name title bold"><b>${repo.name}</b></h4>
          <p class="repo-desc desc">${repo.description}</p>
          <a href="${repo.html_url}" target="_blank" class="link-with-icon">Go to repository
            <img src="img/icons8-link-48.png" alt="link" style="width:12px;height:12px;" class="link-icon">
          </a>
      `;
      if (!!repo.homepage) {
        reposItems += `
          <a href="${repo.homepage}" target="_blank" class="link-with-icon">Visit Live Site
            <img src="img/icons8-link-48.png" alt="link" style="width:12px;height:12px;" class="link-icon">
          </a>
        `;
      }
      reposItems += `</article>`;
    }
    projects.innerHTML = reposItems;
  } catch (error) {
    console.error('Error:', error.message);
    // Handle the error gracefully, e.g., display an error message on the page
  }
}



