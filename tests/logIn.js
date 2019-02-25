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
    'Log in to an account': browser => {
        browser.maximizeWindow()
        
        client.userLogin()
    }
}