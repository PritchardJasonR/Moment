var client = {}

module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('@homepageVerif', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Create an Account': browser => {
        browser.maximizeWindow()
        client
            //The set up
            client.createUser()

       

    }
}