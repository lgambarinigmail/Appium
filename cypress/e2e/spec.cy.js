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
    
    // edit
    it('edit cumputer', () => {
        cy.edit_computer()
    });

    // remove
    it('delet computer" ', () => {
        cy.delet_computer()
    })
    it('delete computer from search" ', () => {
        cy.delete_computer_search()
    })  
})
