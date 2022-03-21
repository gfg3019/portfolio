const url = 'https://api.github.com/users/gfg3019'
const imagens = document.querySelectorAll('.image')

function sampleKeyData(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name
            imageTitle.src = data.avatar_url
            
        })
        .catch(err => console.error(err))
}

sampleKeyData()