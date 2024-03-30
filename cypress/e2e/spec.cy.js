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
    it('delete computer" ', () => {
        cy.delet_computer()
    })
    it('delete computer from search" ', () => {
        cy.delete_computer_search()
    })  

    // search
    it('empty search', () => {
        cy.empty_search()
    });
    it('search by name', () => { 
        cy.search_name()
    })

   // general validations
    it('validate pagination', () => {
        cy.sort_validation()
    });
    it('home top validation button', () => {
        cy.validation_home_top_button()
    });
    it('quantity computers validation', () => {
        cy.validation_qtd_computers()
    });
    it('computer name sort validation', () => {
        cy.validation_computer_name()
    });
    it('introduced sort validation', () => {
        cy.validation_introduced()
    });

    it('discontinued sort validation ', () => {
        cy.validation_discontinued()
    });
    it('company sort validation', () => {
        cy.validation_company()
    });
})