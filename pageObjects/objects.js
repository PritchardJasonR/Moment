//Moment objects
var fillCreate = require('../testAssets/fillCreate.js')
var fillHost = require('../testAssets/fillHost.js')
var fillLogin = require('../testAssets/fillLogin.js')
var fillData = require('../testAssets/fillData.js')
var momentCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    createUser: function (createUser) {
        this

        this.assert.elementNotPresent('@loggedinVerif'),
            this.click('@signUpButton')
        fillCreate(this, fillData.userName, fillData.firstName, fillData.lastName, fillData.password,
            fillData.email, fillData.phone, fillData.createLocation, fillData.gender, fillData.textArea, fillData.photo)
        this.click('@register')
        this.pause(1000)
        this.waitForElementPresent('@loginVarif', 2000)

        return this
    },

    hostExperience: function (data) {
        this
        fillHost(this, data)
        return this
    },
    userLogin: function (userLogin) {
        //The set up
        this
        this.assert.elementNotPresent('@loggedinVerif'),
            this.click('@logInButton')
            .setValue('@userName', 'Jason')
            .setValue('@password', '12345678')

        this.click('@loginButton')
        this.assert.elementPresent('@loggedinVerif')

        return this
    },

    userLogout: function (userLogout) {

        this
        this.waitForElementPresent('@loggedinVerif')
        .click('@loggedinVerif')
        .waitForElementPresent('@logoutButton')
        .click('@logoutButton')
        .waitForElementNotPresent('@loginGreet')

        
        return this
    },

    pickDate: function (month) {
        this
            .click('#your_unique_id')
            .click('@monthForward')
        this.pause(500)
            .click('@monthForward')
        this.pause(500)
            .click('@monthForward')
        this.pause(500)
            .click('@monthForward')
        this.pause(500)
            .click('@monthForward')
        this.pause(500)
            .click('td[aria-label="Saturday, July 27, 2019"]')
        this.assert.containsText('.wizard-date', 'Jul 27')
        this.click('@nextButton')
        this.waitForElementPresent('@durationVerif')
        return this

    },
    pickTime: function (time) {
        this

            .waitForElementVisible('@startTime')
            .click('option[value="10:00:00"]')
            .click('@reviewHost')
            .waitForElementVisible('@endTime')
            .click('@endTime')
            .click('@reviewHost')
            .waitForElementPresent('.review-pag-wizard')
        return this

    },
    fillFields: function (field) {
        //Fill fields function for boundary value analysis
        if (field.userName) {
            this
                .setValue('@userName', field.userName)

        }
        if (field.firstName) {
            this

                .setValue('@firstName', field.firstName)
        }
        if (field.lastName) {
            this
                .setValue('@lastName', field.lastName)
        }
        if (field.password) {
            this
                .setValue('@password', field.password)
        }

        if (field.email) {
            this
                .setValue('@email', field.email)
        }
        if (field.phone) {

            this
                .setValue('@phone', field.phone)
        }

        if (field.createLocation) {
            this
                .setValue('@createLocation', field.createLocation)

        }
        if (field.textArea) {

            this
                .setValue('@textArea', field.textArea)
        }
        if (field.gender) {
            this
                .clickText(field.gender)
        }
        if (field.photo) {
            this
                .setValue('@photo', require('path').resolve(`images/${field.photo}`))
                .pause(2000)

            return this
        }
        if (field.hostLocation) {
            this
                .setValue(field.hostLocation)
                .click('@nextButton')
                .waitForElementPresent('@categoryVerif')
            return this
        }
        if (field.category) {
            this
                .click('@categoryDropdown')
                .clickText(category)
                .click('@nextButton')
                .waitForElementPresent('@qualificationsVerif')
            return this
        }
        if (field.qualifications) {
            this
                .setValue(field.qualifications)
                .click('@nextButton')
                .waitForElementPresent('@whatDoVerif')
            return this
        }
        if (field.whatDo) {
            this
                .setValue(field.whatDo)
                .click('@nextButton')
                .waitForElementPresent('@whereBeVerif')
            return this
        }
        if (field.whereBe) {
            this
                .setValue(field.whereBe)
                .click('@nextButton')
                .waitForElementPresent('@titleVerif')
            return this
        }
        if (field.hostTitle) {
            this
                .setValue(field.hostTitle)
                .click('@nextButton')
                .waitForElementPresent('@photoVerif')
            return this
        }
        if (field.photo1) {
            this
                .setValue(field.photo1)
                .pause(1000)

            return this
        }
        if (field.photo2) {
            this
                .setValue(field.photo2)
                .pause(1000)
            return this
        }
        if (field.hostAddress) {
            this
                .setValue(field.hostAddress)
            return this
        }
        if (field.hostCity) {
            this
                .setValue(field.hostCity)
            return this
        }
        if (field.hostState) {
            this
                .setValue(field.hostState)
            return this
        }
        if (field.hostZip) {
            this
                .setValue(field.hostZip)
            return this
        }
        if (field.hostAddressTitle) {
            this
                .setValue(field.hostAddressTitle)
            return this
        }
        if (field.groupSize) {
            this
                .clickText('select group size')
                .waitForElementVisible('@groupSize')
                .click(`option[value="${groupSize}"]`)
                .click('@nextButton')
                .waitForElementPresent('@priceVerif')
        }
        if (field.price) {
            this
                .setValue(field.price)
                .click('@nextButton')
                .waitForElementPresent('@dateVerif')
            return this
        }


    }
}
//Page Objects
module.exports = {
    url: 'https://airmoment.live/',
    commands: [momentCommands],
    elements: {

        //CSS
        //homepage
        search: 'input[name="searchField"]',
        loggedinVerif: '.image-loggedin',
        homepageVerif: '.app-routes',

        //Create account
        userName: 'input[placeholder="Username"]',
        firstName: 'input[placeholder="First name"]',
        lastName: 'input[placeholder="Last name"]',
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Password"]',
        createLocation: 'input[placeholder="Your location"]',
        phone: 'input[placeholder="Phone number"]',
        textArea: 'textarea',
        photo: 'input[type="file"]',
        register: '.register-button',
        groupSize: 'select',
        groupOption: 'option[value="4"]',



        // login
        loginPassword: 'input[type="password"]',
        loginUsername: 'input[placeholder="Username"]',
        loginButton: '.login-button',
        loginGreet: '.user-greeting',
        loginVarif: '.nav-profile-img',

        //Host
        location: '.wizard-input',
        newIdeaButton: '.hostpage-newIdea-button',
        locationVerif: '.wizard-locale',
        nextButton: 'input[type="submit"]',
        tipDropdown: '.tips',
        tipVerif: '.wizard-tips',
        qualifications: 'textarea',
        whatDo: 'textarea',
        whereBe: 'textarea',
        categoryVerif: '.wizard-category',
        qualificationsVerif: '.wizard-qualifications',
        whatDoVerif: '.wizard-whatWeWillDo',
        whereBeVerif: '.wizard-whereWeWillBe',
        titleVerif: '.wizard-title',
        hostTitle: '.wizard-input',
        photoVerif: '.steptwo-photo',
        hostVerif: '.hostpage-header',
        addressVerif: '.wizard-meetinglocation',
        priceVerif: '.wizard-price',
        price: 'input[type="number"]',
        dateVerif: '.wizard',
        durationVerif: '.wizard-duration',


        //bookTrip
        tripPageVerif: '.detailed-descriptions',
        guestDropDown: '.select-guest',
        completionVerif: '.thankyou-wrapper',
        emailField: '.input-phone',
        getTotal: '.total',
        checkOut: 'span',
        ccNumber: 'input[placeholder="Card number"]',
        expDate: 'input[placeholder="MM / YY"]',
        cvc: 'input[placeholder="CVC"]',
        finalizePayment: '[type="submit"]',
        varifReservation: '.thankyou-wrapper',
        bookGroup: 'select',
        reserveEmail: '.input-phone',
        payEmail: 'input[type="email"]',

        //Review
        selectReview: '.mcw-nextbutton',
        varifReview: '.moment-review',
        reviewTitle: '.text-area-1',
        reviewField: '.text-area-2',

        //XPATH
        // selectorName: {selector: '', locateStrategy: 'xpath'}
        //home screen
        logoutButton: { selector: '(//button)[1]', locateStrategy: 'xpath' },
        priceButton: {
            selector: '//button[contains(text(), "Price")]',
            locateStrategy: 'xpath'

        },
        guestButton: {
            selector: '//button[contains(text(), "Guest")]',
            locateStrategy: 'xpath'
        },
        categoriesButton: {

            selector: '//button[contains(text(), "Categories")]',
            locateStrategy: 'xpath'
        },

        // login
        signUpButton: {
            selector: '//a[contains(text(), "Sign up")]',
            locateStrategy: 'xpath'
        },
        logInButton: {
            selector: '//a[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        },

        //Host
        hostButton: {
            selector: '//a[contains(text(), "Host")]',
            locateStrategy: 'xpath'
        },
        categoryDropdown: {
            selector: '(//select)',
            locateStrategy: 'xpath'
        },

        backButton: {
            selector: '//button[contains(text(), "Back")]',
            locateStrategy: 'xpath'
        },

        photo1: {
            selector: '(//input[@type="file"])[1]',
            locateStrategy: 'xpath'
        },

        photo2: {
            selector: '(//input[@type="file"])[2]',
            locateStrategy: 'xpath'
        },
        hostAddress: {
            selector: '(//input)[2]',
            locateStrategy: 'xpath'
        },
        hostCity: {
            selector: '(//input)[3]',
            locateStrategy: 'xpath'
        },
        hostState: {
            selector: '(//input)[4]',
            locateStrategy: 'xpath'
        },
        hostZip: {
            selector: '(//input)[5]',
            locateStrategy: 'xpath'
        },
        hostAddressTitle: {
            selector: '(//input)[6]',
            locateStrategy: 'xpath'
        },
        monthForward: {
            selector: '(//div[@role="button"])[2]',
            locateStrategy: 'xpath'
        },
        startTime: {
            selector: '(//select)[1]',
            locateStrategy: 'xpath'
        },
        endTime: {
            selector: '(//option[@value="18:00:00"])[2]',
            locateStrategy: 'xpath'
        },

        reviewHost: {

            selector: '(//button[@class])[2]',
            locateStrategy: 'xpath'
        },


        //BookTrip
        navHome: {
            selector: '(//img)[1]',
            locateStrategy: 'xpath'
        },
        chooseSelector: {
            selector: '(//a[@class="choose-button"])',
            locateStrategy: 'xpath'
        },
        natureButton: {
            selector: '(//button[@class="cat-buttons"])[5]',
            locateStrategy: 'xpath'
        },
        applyCategory: {

            selector: '(//button[@class="apply-button"])[3]',
            locateStrategy: 'xpath'
        },
        selectCard: {
            selector: '(//div[@class="moment-card"])[1]',
            locateStrategy: 'xpath'
        },

        //Review
        finalizeReview: {
            selector: '(//button[@class="mcw-nextbutton-on"])',
            locateStrategy: 'xpath'
        },
        pay: {
            selector: '(//button)[2]',
            locateStrategy: 'xpath'
        }
    }
}
