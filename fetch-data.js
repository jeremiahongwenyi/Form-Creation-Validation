document.addEventListener('DOMContentLoaded', function () {
    fetchUserData()
})

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl, { method: 'GET' })
        const users = await response.json()
        console.log(users);


        dataContainer.innerHTML = ''
        const userList = document.createElement('ul')

        users.forEach(element => {
            const listItem = document.createElement('li')
            listItem.textContent = element.name
            userList.appendChild(listItem)
        });

        dataContainer.appendChild(userList)

    } catch (err) {
        console.log('error', err);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }

}