let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appId = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let tempOfLondon = async function (req, res) {
    try {
        let city = "London"
        let key = req.query.appid
        if (key) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            }
            let result = await axios(options)
            res.status(200).send({ status: true, msg: "London", data: result.data.main.temp })
        } else {
            res.status(400).send({ status: false, msg: "Please provide valid  key" })
        }

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}


let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let city = []
        for (i = 0; i < cities.length; i++) {
            let object = { city: cities[i] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=30733c8351f9b16494699d7a127233d1`
            }
            let result = await axios(options)
            object.temp = result.data.main.temp
            city.push(object)
        }
        let sorted = city.sort(function (a, b) { return a.temp - b.temp })
        // let sorted = city.sort({temp: 1})
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.tempOfLondon = tempOfLondon
module.exports.getSortedCities = getSortedCities