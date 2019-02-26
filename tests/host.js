var client = {}
var fillData = require('../testAssets/fillData.js')

module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('@homepageVerif', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Host an Expirence': browser => {
        browser.maximizeWindow()
        client.waitForElementPresent('@homepageVerif')
        // client.userLogin()
        client.pause(1000)
        fillData.forEach(file => {
            client.userLogin()
            // client.api.url('https://airmoment.live/host/create')
            client.hostExperience(file)
            client.userLogout()
        })
    
}
}