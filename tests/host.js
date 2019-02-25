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
    'Host an Expirence': browser => {
        browser.maximizeWindow()
        client.waitForElementPresent('@homepageVerif')
        client.userLogin()
        client.hostExperience()
    }
}