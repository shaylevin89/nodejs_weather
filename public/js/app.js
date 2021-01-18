console.log('js file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loc = search.value

    message1.textContent = 'laoding...'
    message2.textContent = ''

    fetch(`/weather?place=${loc}`).then((res) => {
    res.json().then((data) => {
        if (data.error) {
            message1.textContent = data.error
        } else {
            message1.textContent = data.location
            message2.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})