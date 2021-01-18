const request = require('request')


const geocode = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?limit=1&access_token=pk.eyJ1Ijoic2hheWFyb2siLCJhIjoiY2trMWFkczUxMDduZTJ2cW9mamJzc282diJ9.c1rvXP9fncpr8YUDkOGn1A`
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect')
        } else if (!body.features || body.features.length === 0) {
            callback('unable to find place')
        } else {
            callback(undefined, {
                lat: body.features[0].center[0],
                long: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode