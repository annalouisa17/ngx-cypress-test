/// <reference types = "cypress"/>

const { isJsxOpeningLikeElement } = require("typescript")

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

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signinButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')
        
        //find button within that parent - can only use to find the child element
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        //find nb-card which contains text horizontal form and find a web element with attribute type=email
        cy.contains('nb-card','Horizontal form').find('[type="email"]')
    })
    
    it('then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')

        // find the locator of nb-card, got result and saved it into the firstForm parameter
        // when you use then, the parameter becomes a Jquery object (it's no longer a cypress object)
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            //can save context into a variable because its a jquery format - wouldn't be able to do this if it was a cypress format
            //when you are in the jquery format you cannot use cypress method like click
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')
            
            // nested contains functions
            // variable in first function available in the next nested functions
            cy.contains('nb-card', 'Basic form').then(secondForm  => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondText)
                
                // to get back into a cypress context- use wrap
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })


        })
    })

    it('invoke command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        //get result of function save as label variable
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address')
        })

        //3 - invoke command
        //cypress invoke method to get text from the page - save as parameter of function and then make assertion that its equal
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })

    })

    it('assert property', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            //wrap because input is a jquery element
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 17, 2020')
        })
    })

    it('radio button', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons)
                .first()
                //disabled cypress default check for the element to be visible
                .check({force: true})
                .should('be.checked')
            
            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true})
            
            cy.wrap(radioButtons)
                .first()
                .should('not.be.checked')

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')
        })
    })

    it('check boxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        // cy.get('[type="checkbox"]').check({force: true}) 
        // need to click to uncheck the checkbox
        cy.get('[type="checkbox"]').eq(0).click({force: true})
        cy.get('[type="checkbox"]').eq(1).check({force: true})

        //check method only used to work with the elements of type checkbox and radio buttons - only with input elements - can only check but can't uncheck
        //click method works to uncheck
    })

    it('lists and dropdowns', () => {
        cy.visit('/')
        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        //2
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each((listItem, index) => {
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if(index < 3) {
                    cy.wrap(dropdown).click()
                }
                
            })
        })

    })

    it.only('Web tables', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        
        //1
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            // column index 6
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
        })

        //2
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bondar')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            
        })
        // get all the columns
        cy.get('tbody tr').first().find('td').then( tableColumn => {
            cy.wrap(tableColumn).eq(2).should('contain','Artem')
            cy.wrap(tableColumn).eq(3).should('contain','Bondar')

        })

        //3 test of table search functions
        const age = [20, 30, 40, 200]

        cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            //need to wait for the table to be updated with ages 20
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if(age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })

        

    })
})