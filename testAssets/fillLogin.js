var fillData = require('../testAssets/fillData.js')
module.exports = (client) => {
    client

        // fill Login info
        fillData.forEach(file => {
            client.fillFields(file, fillData.userName, fillData.password)
       
            client.pause(1000)
        })
}