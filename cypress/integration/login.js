/// <reference types="Cypress" />

const Locators = require("../fixtures/Locators.json");
const faker = require('faker')

describe('login spec', () => {
    it('visit gradebook page', () => {
        cy.visit('https://gradebook.vivifyideas.com')
    })

    it('login with valid credentials', () => {
        cy.get(Locators.Login.email).type('gavran123@test.com')
        cy.get(Locators.Login.password).type('gavran123')
        cy.get(Locators.Login.submitBtn).click()
    })

    it('create new profesor', () => {
        cy.wait(2000)
        cy.get(Locators.Navigation.addProfessor).click()
        cy.get(Locators.CreateNewProfessor.enterName).type('ramadan')
        cy.get(Locators.CreateNewProfessor.enterLastName).type('hamadani')
        cy.get(Locators.CreateNewProfessor.addImage).click()
        cy.get(Locators.CreateNewProfessor.addImageUrl).type('https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg')
        cy.get(Locators.CreateNewProfessor.submit).click()
    })
})