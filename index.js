const projects = document.getElementById("projects");
const hamburgerMenu = document.getElementById('hamburger-icon')

hamburgerMenu.addEventListener('click',()=>{
  hamburgerMenu.classList.toggle('open');
})


let userListItem = [];


window.onload = async function() {
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



