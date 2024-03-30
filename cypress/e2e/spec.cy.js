describe('Hostfully QA Engineer Cypress exercise', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    // add
    it('add new computer', () => {
        cy.add_computer()
    })
    it('add new computer fail', () => {
        cy.add_computer_fail()
    })
})
