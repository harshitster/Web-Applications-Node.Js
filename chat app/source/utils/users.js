const users = []

const addUser = function ({ id, username, room }) {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    const existingUser = users.find(function (user) {
        return user.username === username && user.room === room
    })

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    const user = { id, username, room }
    users.push(user)

    return { user }
}

const removeUser = function (id) {
    const index = users.findIndex(function (user) {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = function (id) {
    return users.find(function (user) {
        return user.id === id
    })
}

const getUsersInRoom = function (room) {
    room = room.trim().toLowerCase()
    return users.filter(function (user) {
        return user.room === room
    })
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}