/// <reference types = "cypress"/>

describe('Our first suite', () => {
    
    // can put as many tests as you want 
    it('first test', () => {
        //actual test code goes here

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //get: basic method to get any web element

        //search element by Tag name
        cy.get('input')
        //by ID
        cy.get('#inputEmail1')
        //by Class name
        cy.get('.input-full-width')
        //by Attribute name
        cy.get('[placeholder]')
        //by Attribute name and value
        cy.get('[placeholder="Email"]')
        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')
        // by two different attributes 
        cy.get('[placeholder="Email"][type="email"]')
        //by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //the most recommended way by Cypress (create your own attributes)
        cy.get('[data-cy="imputEmail1"]')
    })
})