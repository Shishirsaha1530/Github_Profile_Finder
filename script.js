    let notFoundText = document.getElementById('notFoundText')
let searchBtn = () =>{
    let inputField = document.getElementById('exampleFormControlInput1');
    let inputValue = inputField.value;
    let url = `https://api.github.com/users/${inputValue}` 
    fetch(url)
    .then(res=> res.json())
    .then(data=>showProfile(data))
    inputField.value=''  
}

let showProfile = (elem) =>{
    let showUser = document.getElementById('showUser');
    showUser.textContent='';
   if(elem.message==="Not Found"){
    notFoundText.innerText = 'No User Found'
   }
   else{
       notFoundText.innerText=''
       let div = document.createElement('div');
       div.innerHTML = `
       <div class="card card-body mb-3 mt-4" style="max-width: 540px;"> 
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${elem.avatar_url}">
            <a href="${elem.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary p-3">Public Repos:  ${elem.public_repos}</span>
           <span class="badge bg-success p-3">Public Gists: ${elem.public_gists}</span>
            <span class="badge bg-danger p-3">Followers: ${elem.followers}</span>
            <span class="badge bg-warning p-3 mt-3">Following: ${elem.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${elem.company}</li>
              <li class="list-group-item">Website/Blog: ${elem.blog}</li>
              <li class="list-group-item">Location: ${elem.location}</li>
              <li class="list-group-item">Member Since: ${elem.created_at}</li>
            </ul>
          </div>
        </div>   
        </div>   
       `

  showUser.appendChild(div)
   }
}