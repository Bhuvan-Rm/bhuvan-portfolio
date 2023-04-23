const projects = document.getElementById("projects");
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
                    repos_items+=`<article class="card">                
                    <h4 class="repo-name title bold"><b>${repo.name}</b></h4>
                    <p class="repo-desc desc">${repo.description}</p> 
                    <a href="${repo.html_url}" target="_blank" >Repository Link<a>
                    <a href="${repo.homepage}" target="_blank" >Website link<a>     
                    </article> 
                    ` 
                }
                else {
                    repos_items+=`<article class="card">                
                    <h4 class="repo-name title bold"><b>${repo.name}</b></h4>
                    <p class="repo-desc desc">${repo.description}</p> 
                    <a href="${repo.html_url}" target="_blank" >Repository Link<a>    
                    </article> 
                    ` 
                }
                   
            }
            projects.innerHTML = repos_items;
        })
    }
