const url = "http://localhost:5500/api"
const newUser = {
    name: "Eryka Gonçalves",
    avatar: "https://picsum.photos/",
    city: "Uberlândia"
}
const userUpdated = {
    name: "Marcelo Calvis",
    avatar: "https://picsum.photos/",
    city: "Rio de Janeiro"
}


function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data

            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {

    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)

    .then(response => console.log(response))
    .catch(error => console.error(error))
}




// getUsers()
// addNewUser(newUser)
// getUser(1)
// updateUser(3, userUpdated)
// deleteUser(6)


