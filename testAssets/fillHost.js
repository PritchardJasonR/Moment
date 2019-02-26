// var fillData = require('../testAssets/fillData.js')
module.exports = (client, fillData) => {
    client

        // fill info to host an experience


        //navigate to precondition
        .waitForElementVisible('@hostButton')
        .moveToElement('@hostButton', 10, 10)
        .api.mouseButtonClick()
    client
        .waitForElementVisible('@newIdeaButton')
        .click('@newIdeaButton')
    client
        .waitForElementPresent('@locationVerif')


        // test script
        //location
        .setValue('@location', fillData.hostLocation)
        .click('@nextButton')
        .waitForElementPresent('@categoryVerif')

        //category
        .click('@categoryDropdown')
        .clickText(fillData.category)
        .click('@nextButton')
        .waitForElementPresent('@qualificationsVerif')

        //qualification
        .setValue('@qualifications', fillData.qualifications)
        .click('@nextButton')
        .waitForElementPresent('@whatDoVerif')

        // What we will do?
        .setValue('@whatDo', fillData.whatDo)
        .click('@nextButton')
        .waitForElementPresent('@whereBeVerif')

        // Where were going
        .setValue('@whereBe', fillData.whereBe)
        .click('@nextButton')
        .waitForElementPresent('@titleVerif')

        // Title of Experience
        .setValue('@hostTitle', fillData.hostTitle)
        .click('@nextButton')
        .waitForElementPresent('@photoVerif')

        // Pics!
        .setValue('@photo1', require('path').resolve(`images/${fillData.photo1}`))
        .setValue('@photo2', require('path').resolve(`images/${fillData.photo2}`))
    client.pause(3000)
        .click('@nextButton')
        .waitForElementPresent('@addressVerif')

        //Address
        .setValue('@hostAddress', fillData.hostAddress)
        .setValue('@hostCity', fillData.hostCity)
        .setValue('@hostState', fillData.hostState)
        .setValue('@hostZip', fillData.hostZip)
        .setValue('@hostAddressTitle', fillData.hostAddressTitle)
        .click('@nextButton')

        // Group Size!
        .clickText('select group size')
        .waitForElementVisible('@groupSize')
        .click(`option[value="${fillData.groupSize}"]`)
        .click('@nextButton')
        .waitForElementPresent('@priceVerif')

        // Price
        .setValue('@price', fillData.price)
        .click('@nextButton')
        .waitForElementPresent('@dateVerif')

        // Date
        .pickDate()

        // Time This one was hard
        .pickTime()

        //complete the Hosting
        .clickText('POST')



}

