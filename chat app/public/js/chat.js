const socket = io()

const $messageForm = document.querySelector('#message-form')
const $messageFormInput = document.querySelector('#message-form-input')
const $messageFormButton = document.querySelector('#message-form-button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoscroll = function () {
    //New message element
    const $newMessage = $messages.lastElementChild

    //Height of the new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    //Visible height
    const visibleHeight = $messages.offsetHeight

    //Height of messages container
    const containerHeight = $messages.scrollHeight

    //How far have I scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight

    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight
    }
}

socket.on('message', function (message) {
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        createdAt: moment(message.createdAt).format('k:mm a'),
        message: message.text
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

socket.on('locationMessage', function (message) {
    const html = Mustache.render(locationMessageTemplate, {
        createdAt: moment(message.createdAt).format('k:mm a'),
        url: message.url
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

$messageForm.addEventListener('submit', function (event) {
    event.preventDefault()

    $messageFormButton.setAttribute('disabled', 'true')
    
    const value = event.target.elements.message.value

    socket.emit('sendMessage', value, function (error) {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if (error) {
            return console.log(error)
        } 

        console.log('Delivered')
    })
})

$sendLocationButton.addEventListener('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by brower')
    }

    $sendLocationButton.setAttribute('disabled', 'true')

    navigator.geolocation.getCurrentPosition(function (position) {
        $sendLocationButton.removeAttribute('disabled')

        const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        socket.emit('sendLocation', coords, function (message) {
            console.log(message)
        })
    })
})

socket.on('roomData', function ({ room, users }) {
    const html = Mustache.render(sidebarTemplate, {
        room, 
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})

socket.emit('join', { username, room }, function (error) {
    if (error) {
        alert(error)
        location.href = '/'
    }
})