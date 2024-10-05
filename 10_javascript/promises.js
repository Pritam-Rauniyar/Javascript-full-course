fetch('https://api.github.com/users/pritam-rauniyar')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data.avatar_url);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available.
