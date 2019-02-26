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
    'Search by category and Make Reservation': browser => {
        browser.maximizeWindow()
        client
            .userLogin()
            .click('@navHome')
            .waitForElementPresent('@homepageVerif')
            .clickText('Categories')
            .click('@natureButton')
            .click('@applyCategory')
            .waitForElementPresent('@selectCard')
            .click('@selectCard')
            .waitForElementPresent('@tripPageVerif')
            .waitForElementPresent('button.choose-button')
            .click('button.choose-button')
            .waitForElementPresent('.checkout-review')
            .waitForElementVisible('@reserveEmail')
            .setValue('@reserveEmail', 'alex@webb.com')
            .click('button.StripeCheckout')
            .api.element('css selector','.stripe_checkout_app', function (result) {
                console.log(result)
                client.api.frame(result.value)
            })
        client
        .waitForElementVisible('@payEmail')
        .clearValue('@payEmail')
        .setValue('@payEmail' ,'fakemail@fake.com')
            .waitForElementVisible('@ccNumber')
            .clearValue('@ccNumber')
            .setValue('@ccNumber', '4000056655665556')
            .waitForElementVisible('@expDate')
            .clearValue('@expDate')
            .setValue('@expDate', '1225')
            .waitForElementVisible('@cvc')
            .clearValue('@cvc')
            .setValue('@cvc', '159')
            .click('@finalizePayment')
            .waitForElementVisible('@completionVerif', 10000)


    },
    'Search by Text and Make Reservation': browser => {
        browser.maximizeWindow()
        client
           
            .click('@navHome')
            .waitForElementPresent('@homepageVerif')
            .waitForElementVisible('@search')
            .setValue('@search', 'Brick')
            .click('.searched-moments')
            .waitForElementPresent('@tripPageVerif')
            .waitForElementPresent('button.choose-button')
            .click('button.choose-button')
            .waitForElementPresent('.checkout-review')
            .waitForElementVisible('@reserveEmail')
            .setValue('@reserveEmail', 'alex@webb.com')
            .click('button.StripeCheckout')
            .api.element('css selector','.stripe_checkout_app', function (result) {
                console.log(result)
                client.api.frame(result.value)
            })
            client
        .waitForElementVisible('@payEmail')
        .clearValue('@payEmail')
        .setValue('@payEmail' ,'fakemail@fake.com')
            .waitForElementVisible('@ccNumber')
            .clearValue('@ccNumber')
            .setValue('@ccNumber', '4000056655665556')
            .waitForElementVisible('@expDate')
            .clearValue('@expDate')
            .setValue('@expDate', '1225')
            .waitForElementVisible('@cvc')
            .clearValue('@cvc')
            .setValue('@cvc', '159')
            .click('@finalizePayment')
            .waitForElementVisible('@completionVerif', 10000)

    },
}