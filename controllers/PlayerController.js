const Player = require('../models/Player')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Player.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })

    }
}