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

