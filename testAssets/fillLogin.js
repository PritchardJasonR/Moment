module.exports = (client, loginUsername, loginPassword) => {
    client

        // fill Login info
        
        .setValue('@loginUsername', loginUsername)
        .setValue('@loginPassword', loginPassword)
        .click('@loginButton')
        client.waitForElementPresent('@loginGreet')


}