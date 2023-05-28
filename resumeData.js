 // Load the JSON file
//  const data = require('./data/skill.json');
//  console.log(data);
 window.onload = ()=> {

    fetch('data/skill.json')
 .then(response => response.json())
 .then(data => {
   // Get the skills container element
   const skillsContainer = document.getElementById('article-skills');

   // Iterate over the skills data and generate HTML elements
   data.skills.forEach((category) => {
     // Create category element
     const categoryElement = document.createElement('div');
     categoryElement.classList.add('category');
     categoryElement.textContent = category.category;

     // Create skills list element
     const skillsListElement = document.createElement('ul');
     category.skills.forEach((skill) => {
       // Create skill item element
       const skillItemElement = document.createElement('li');
       skillItemElement.classList.add('skill-card');
       skillItemElement.textContent = skill;

       // Append skill item to skills list
       skillsListElement.appendChild(skillItemElement);
     });

     // Append category and skills list to skills container
     skillsContainer.appendChild(categoryElement);
     skillsContainer.appendChild(skillsListElement);
   });
 })
 .catch(error => console.log(error));
}
