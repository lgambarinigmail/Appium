import { fillComputerForm } from '../support/utils'

// add
Cypress.Commands.add('add_computer', () => {
    cy.get('#add').click()
    fillComputerForm('test gamba', '2023-03-26', '2024-03-26', 'Apple Inc.')
    cy.get('[type=submit]').click()
    cy.get('.alert-message.warning').should('contain', 'has been created')
})

Cypress.Commands.add('add_computer_fail', () => {
    cy.get('#add').click()
    const invalidIntroducedDates = ['aaaa-03-26', '2023-bb-26', '2023-03-cc']
    invalidIntroducedDates.forEach(date => {
        cy.get('#name').type('test gamba')
        cy.get('#introduced').type(date)
        cy.get('[type=submit]').click()
        cy.get('#company').select('IBM')
        cy.get('.help-inline').invoke('text').should('include', 'Failed to decode date')
    })
    
    const invalidDiscontinuedDates = ['aaaa-03-26', '2024-bb-26', '2024-03-cc']
    invalidDiscontinuedDates.forEach(date => {
        cy.get('#name').type('test gamba')
        cy.get('#discontinued').type(date)
        cy.get('[type=submit]').click()
        cy.get('#company').select('Apple Inc.')
        cy.get('.help-inline').invoke('text').should('include', 'Failed to decode date')
    })

    cy.get('.btn').contains('Cancel').click()
})

// edit

Cypress.Commands.add('edit_computer', () => {
    cy.get('.computers.zebra-striped a').eq(7).click()
    fillComputerForm('test edicao', '2021-03-26', '2022-03-26', 'IBM')
    cy.get('.btn.primary').click()
    cy.get('.alert-message.warning').should('contain', 'has been updated') 
})

// remove

Cypress.Commands.add('delet_computer', () => {
    cy.get('.computers.zebra-striped a').eq(4).click()
    cy.get('.btn.danger').click({ force: true })
    cy.get('.alert-message.warning').should('contain', 'has been deleted')
})

const searchTerm = 'Nokia' 

Cypress.Commands.add('delete_computer_search', () => {

    cy.get('#searchbox').type(searchTerm)
    cy.get('#searchsubmit').click()
    cy.get('.computers.zebra-striped tbody').should('contain', searchTerm)
    cy.get('.computers.zebra-striped a').eq(4).click()
    cy.get('.btn.danger').click({ force: true })
    cy.get('.alert-message.warning').should('contain', 'has been deleted')
})

Cypress.Commands.add('search_name', () => {

    cy.get('#searchbox').type(searchTerm)
    cy.get('#searchsubmit').click()
    cy.get('.computers.zebra-striped tbody').should('contain', searchTerm)
})

const searchTermInvalid = 'aabbccddee'

Cypress.Commands.add('empty_search', () => {

    cy.get('#searchbox').type(searchTermInvalid)
    cy.get('#searchsubmit').click()
    cy.get('.well').should('contain', 'Nothing to display')
})

// general validations

Cypress.Commands.add('sort_validation', () => {

    cy.get('.next a').click()
    cy.url().should('eq', 'https://computer-database.gatling.io/computers?p=1')
})

Cypress.Commands.add('validation_home_top_button', () => {

    cy.get('.fill a').click()
    cy.url().should('eq', 'https://computer-database.gatling.io/computers')
})

Cypress.Commands.add('validation_qtd_computers', () => {

    cy.get('#main h1').should('contain', '574 computers found')
})

Cypress.Commands.add('validation_computer_name', () => {

    cy.get('.computers.zebra-striped a').eq(5).should('contain', 'AN/FSQ-32')
    cy.get('.computers.zebra-striped a').eq(0).click()
    cy.get('.computers.zebra-striped a').eq(5).should('contain', 'lenovo thinkpad x61s')

})
Cypress.Commands.add('validation_introduced', () => {

    cy.get('.computers.zebra-striped tbody tr td').eq(9).should('contain', '01 Jan 1958')
    cy.get('.computers.zebra-striped a').eq(1).click()
    cy.get('.computers.zebra-striped a').eq(1).click()
    cy.get('.computers.zebra-striped tbody td ').eq(5).should('contain', '09 Feb 2011')
})

Cypress.Commands.add('validation_discontinued', () => {

    cy.get('.computers.zebra-striped a').eq(2).click()
    cy.get('.computers.zebra-striped a').eq(2).click()
    cy.get('.computers.zebra-striped tbody td ').eq(2).should('contain', '02 Mar 2011')
})

Cypress.Commands.add('validation_company', () => {

    cy.get('.computers.zebra-striped tbody tr td').eq(7).should('contain', 'IBM')
    cy.get('.computers.zebra-striped a').eq(3).click()
    cy.get('.computers.zebra-striped a').eq(3).click()
    cy.get('.computers.zebra-striped tbody td ').eq(7).should('contain', 'Xerox')
})