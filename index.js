const projects = document.getElementById("projects");
const hamburgerMenu = document.getElementById('hamburger-icon')

hamburgerMenu.addEventListener('click',()=>{
  hamburgerMenu.classList.toggle('open');
})

// if ( window.innerWidth < 700 ) {
//   document.querySelector("div").classList.add('three');
//   document.querySelector("div").classList.remove('ten');
// }

let userListItem = [];


window.onload = function() {
    fetch(`https://api.github.com/users/Bhuvan-Rm/repos`)
        .then((res) => {
            return res.json()
        })
        .then((repos) => {
            
            console.log("Repositories found : "+repos.length);

            // count.textContent = "No. of Users found : " + userListItem.length;
            let repos_items = ""
            for (let repo of repos) {
    
                if(!!repo.homepage){               
                    repos_items+=`<article class="card zoom">                
                    <h4 class="repo-name title bold"><b>${repo.name}</b></h4>
                    <p class="repo-desc desc">${repo.description}</p> 
                    <a href="${repo.html_url}" target="_blank" class="link-with-icon">Go to repository
                    <img src="img/icons8-link-48.png" alt="link" style="width:12px;height:12px;" class="link-icon"></a>
                    <a href="${repo.homepage}" target="_blank" class="link-with-icon">Visit Live Site
                    <img src="img/icons8-link-48.png" alt="link" style="width:12px;height:12px;" class="link-icon"></a>     
                    </article> 
                    `    
                }
                else {
                    repos_items+=`<article class="card zoom">                
                    <h4 class="repo-name title bold"><b>${repo.name}</b></h4>
                    <p class="repo-desc desc">${repo.description}</p> 
                    <a href="${repo.html_url}" target="_blank" class="link-with-icon">Go to repository
                    <img src="img/icons8-link-48.png" alt="link" style="width:12px;height:12px;" class="link-icon"></a>  
                    </article> 
                    ` 
                }
                   
            }
            projects.innerHTML = repos_items;
        })
    }

    var coll = document.getElementsByClassName("nav-toggle");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
