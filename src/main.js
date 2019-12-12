'use strict';

const btn = document.querySelector('#btn')
btn ? 
btn.addEventListener('click', e =>{
    const userInput = document.querySelector('.user-input').value;
    const section = document.querySelector('#user-repos');
        e.preventDefault();
        section.innerHTML = "";
        connectToApiUser(userInput);
}) : null


function showUserInfo(data){
    removeErrorContainer();
    document.querySelector('.user-info').style.display = 'flex';
    document.querySelector('.user-avatar').src = data.avatar_url;
    document.querySelector('.user-avatar').alt = `${data.login} avatar`;
    document.querySelector('.username').innerText = data.login;
    const hasName= document.querySelector('.fullname');
    data.name == null ? hasName.innerText = `${data.login}` : hasName.innerText = data.name;
    const userHasBio = document.querySelector('.user-bio');
    data.bio === null ? userHasBio.innerText = 'this is the bio...' : userHasBio.innerText = data.bio;

    connectToApiRepos(data.login);
}

function showUserRepos(data){
    document.querySelector('.repos-title').style.display = 'flex';
    const section = document.querySelector('#user-repos');
    section.style.display = 'flex';
    const reposTable = document.createElement('table');
    reposTable.classList.add('repos-table');
    section.appendChild(reposTable);
    data.forEach(repo=>{
        const row = reposTable.insertRow(0);
        row.classList.add('row');
        const nameRepoCell = row.insertCell(0);
        nameRepoCell.innerHTML = `<a class="link-repo" href=${repo.svn_url}> <p>${repo.name}</p></a>`;
        const starsRepoCell = row.insertCell(1);
        starsRepoCell.innerHTML = `<i class="material-icons icon">star</i>${repo.stargazers_count}`;
        const forksRepoCell = row.insertCell(2);
        forksRepoCell.innerHTML = `<i class="material-icons share-icon">share</i>${repo.forks_count}`;
    })

}


function removePreviousDataUser(){
    const userInfo = document.querySelector('.user-info');
    const repoTitle = document.querySelector('.repos-title');
    const userRepo = document.querySelector('.user-repos');
    if (userInfo && repoTitle && userRepo){
        document.querySelector('.user-info').style.display = 'none';
        document.querySelector('.repos-title').style.display = 'none';
        document.querySelector('.user-repos').style.display = 'none';
    }

}

function showError(){
    removePreviousDataUser()
    document.querySelector('.error-container').style.display = 'flex';
    document.querySelector('.error-container').innerHTML = `<p> Does not exist </p>`;
}

function removeErrorContainer(){
    const errorContainer = document.querySelector('.error-container');
    const error = document.querySelector('.error');
    if(errorContainer && error) {
        document.querySelector('.error-container').style.display = 'none';
        document.querySelector('.error').style.display = 'none';

    }

}