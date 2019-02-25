module.exports = (client, userName, firstName, lastName, password, email, phone, createLocation, gender, textArea, photo) => {
    client

        // fill user info to create an account
        
        .setValue('@userName', userName) 
        .setValue('@firstName', firstName)
        .setValue('@lastName', lastName)
        .setValue('@password', password)
        .setValue('@email', email)
        .setValue('@phone',phone)
        .setValue('@createLocation', createLocation)
        .clickText(gender)
        .setValue('@textArea', textArea)
        .setValue('@photo', require('path').resolve(`images/${photo}`))
        .pause(2000)
        .click('@register')
        client.waitForElementPresent('@loginGreet')

}