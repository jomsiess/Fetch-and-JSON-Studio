window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      response.json().then(function(json){ 
          let astronautString = ""; 
          let containerDiv = document.getElementById("container"); 
          for (let i = 0; i < 7; i++) {
              astronautString += 
              `<div class= "astronaut"> 
                <div class= "bio"> 
                <h3>${json[i].firstName} ${json[i].lastName}</h3> 
                  <ul>
                    <li>Hours in Space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(", ")}</li>
                  </ul>
                  </div>
                    <img class= "avatar" src= ${json[i].picture}>
                 </div>`;
        };
        containerDiv.innerHTML = astronautString;
      }); 
    });
  });// TODO: add code here

  // astronautString += `<h3>${json[i].firstName} ${json[i].lastName} ${json[i].skills} ${json[i].hoursInSpace} ${json[i].picture}</h3`;
  //skills is an array.. use method.. array methods... 

  // ${json[i].skills} ${json[i].hoursInSpace} ${json[i].picture}</div></div>`;  

