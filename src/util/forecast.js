const request = require('request')


const url = "http://api.weatherstack.com/current?access_key=46076572b78815d46cc8d47534393f76&query="
// const map = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1Ijoic2hheWFyb2siLCJhIjoiY2trMWFkczUxMDduZTJ2cW9mamJzc282diJ9.c1rvXP9fncpr8YUDkOGn1A`

// request({ url: url, json: true}, (error, res) => {
//     if (error) {
//         console.log(error)
//     } else if (res.body.error) {
//         console.log('place did not insert correct')
//     } else {
//     const data = res.body
//     console.log(`sum: ${data.current.weather_descriptions[0]}. it is ${data.current.temperature} but feel like ${data.current.feelslike}`)
//     }
// })

const forecast = (x, y, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=46076572b78815d46cc8d47534393f76&query=${x},${y}&units=m`
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect')
        } else if (body.error) {
            callback('place did not insert correct')
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. it is ${body.current.temperature}C feel like ${body.current.feelslike}C`)
        }
    })
}


module.exports = forecast