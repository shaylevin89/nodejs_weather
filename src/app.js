const express = require('express')
const path = require('path')
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'shay'
    })
})

app.get('/weather', (req, res) => {
    const place = req.query.place
    if (!place) {
        return res.send({
            error: 'you did not provide a place',
            example: '127.0.0.1:3000/weather?place=<place>'
        })
    }
    geocode(place, (error, {lat, long, location} = {}) => {
        if (error) {
            return res.send({error})
        }
        forecast(lat, long, (error, fordata) => {
            if (error) {
                return res.send({error})
            }
    
            res.send({
                location,
                forecast: fordata
            })
        })
    })
    
})

app.listen(port, () => {
    console.log('server up!')
})