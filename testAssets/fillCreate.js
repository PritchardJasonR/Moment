var fillData = require('../testAssets/fillData.js')
module.exports = (client) => {

    // fill user info to create an account
    fillData.forEach(file => {
        client.fillFields(file)

            .pause(2000)
            .click('@register')
        client.waitForElementPresent('@loginGreet')
    })

}