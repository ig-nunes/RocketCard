
// Meu github:
// let url = 'https://api.github.com/users/ig-nunes';

// Github do exemplo:
let url = 'https://api.github.com/users/birobirobiro';

const colors = [
    'darkblue',
    'black',
    'blue',
    'green',
    'yellow',
    'grey',
    'orange',
    'brown',
    'white',
    'red',
    'purple',
    'lightgreen',
    'lightred',
    'turquoise',
    'magenta',
    'lavender'
]


function getUser() {
    axios.get(url)
        .then( response => {
            // console.log(response)
            userName.textContent = response.data.login;
            userAvatar.src = response.data.avatar_url; //'https://picsum.photos/200/300';
            userFollowers.textContent = response.data.followers + " Seguidores"
            userFollowing.textContent = response.data.following + " Seguindo"
            userRepos.textContent = response.data.public_repos + " Repositórios"
            if (response.data.company == null) {
                userCompany.textContent = "Não Especificado"
            } else{
                userCompany.textContent = response.data.company
            }
            if (response.data.location == null) {
                userLocation.textContent = "Não Especificado"
            } else {
                userLocation.textContent = response.data.location
            }
            } )
        .catch( error => console.error(error) )
}

getUser()

function changeColor() {
    let min = 0;         // indice mínimo
    let max = 15;        // indice máximo
    let index = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById('card').style.backgroundColor = colors[index];
}