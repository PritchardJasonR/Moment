module.exports = (client, hostLocation, category, qualifications, whatDo, whereBe, hostTitle, photo1, photo2,
    hostAddress, hostCity, hostState, hostZip, hostAddressTitle, groupSize, price) => {
    client

        // fill info to host an experience



        //navigate to precondition
        .click('@hostButton')
        .waitForElementPresent('@hostVerif')
        .click('@newIdeaButton')
        .waitForElementPresent('@locationVerif')

        // test script
        //location
        .setValue('@location', hostLocation)
        .click('@nextButton')
        .waitForElementPresent('@categoryVerif')
        
        //category
        .click('@categoryDropdown')
        .clickText(category)
        .click('@nextButton')
        .waitForElementPresent('@qualificationsVerif')
        
        //qualification
        .setValue('@qualifications', qualifications)
        .click('@nextButton')
        .waitForElementPresent('@whatDoVerif')
        
        // What we will do?
        .setValue('@whatDo', whatDo)
        .click('@nextButton')
        .waitForElementPresent('@whereBeVerif')
        
        // Where were going
        .setValue('@whereBe', whereBe)
        .click('@nextButton')
        .waitForElementPresent('@titleVerif')
        
        // Title of Experience
        .setValue('@hostTitle', hostTitle)
        .click('@nextButton')
        .waitForElementPresent('@photoVerif')
        
        // Pics!
        .setValue('@photo', require('path').resolve(`images/${photo1}`))
        .setValue('@photo', require('path').resolve(`images/${photo2}`))
        client.pause(3000)
        .click('@nextButton')
        .waitForElementPresent('@addressVerif')
        
        //Address
        .setValue('@hostAddress', hostAddress)
        .setValue('@hostCity', hostCity)
        .setValue('@hostState', hostState)
        .setValue('@hostZip', hostZip)
        .setValue('@hostAddressTitle', hostAddressTitle)
        .click('@nextButton')
        
        // Group Size!
        .clickText('select group size')
        .waitForElementVisible('@groupSize')
        .click(`option[value="${groupSize}"]`)
        .click('@nextButton')
        .waitForElementPresent('@priceVerif')
        
        // Price
        .setValue('@price', price)
        .click('@nextButton')
        .waitForElementPresent('@dateVerif')
        
        // Date
        .pickDate()
       
        // Time This one was hard
        .pickTime()
        
        //complete the Hosting
        .clickText('POST')





}