const url = 'https://api.github.com/users/gfg3019'


function showUserImage(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            imageTitle.src = data.avatar_url
            imagePost.src = data.avatar_url
        })
        .catch(err => console.error(err))
}



showUserImage()