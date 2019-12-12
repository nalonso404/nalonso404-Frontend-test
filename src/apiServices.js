'use strict';

const connectToApiUser = (userInput) =>{
    fetch(`https://api.github.com/users/${userInput}`)
    .then(response=> response.json())
    .then(data=>{
        data.login ? showUserInfo(data) : showError ()
    })
} 

const connectToApiRepos =(userInput) =>{
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then(response => response.json())
    .then(data=>{
        showUserRepos(data)
    })

}
    