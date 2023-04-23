const projects = document.getElementById("projects");
// const count = document.getElementById('result-count');
// const usersList = document.getElementById('users-list');
let userListItem = [];


window.onload = function() {
    fetch(`https://api.github.com/users/Bhuvan-Rm/repos`)
        .then((res) => {
            return res.json()
        })
        .then((repos) => {
            
            console.log(repos.length);

            // count.textContent = "No. of Users found : " + userListItem.length;
            let repos_items = ""
            for (let repo of repos) {
                repos_items+=
                `
                <div class="card">
                    <div class="container">
                    <h4 class="repo-name"><b>${repo.name}</b></h4>
                    <p class="repo-desc">${repo.description}</p> 
                    <a href="${repo.html_url}" target="_blank" >Repository Link<a>
                    <a href="${repo.homepage}" target="_blank" >Website link<a>     
                    </div>
                </div> 
                `   
                   
            }
            projects.innerHTML = repos_items;
        })
    }
