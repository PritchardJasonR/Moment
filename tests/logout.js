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
        client.click('@logInButton')
        .setValue('@loginUsername', 'Jason')
        .setValue('@loginPassword', '12345678')
        .click('@loginButton')
        client.waitForElementPresent('@loginGreet')

    },

    'Now Log out' : browser =>{
       client.waitForElementPresent('@loggedinVerif')
       .click('@loggedinVerif')
       .waitForElementPresent('@logoutButton')
       .click('@logoutButton')
       .waitForElementNotPresent('@loginGreet')


    }
}