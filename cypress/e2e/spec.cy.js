describe('Hostfully QA Engineer Cypress exercise', () => {

    // Here we have a beforeEach that focus on visiting our baseUrl in every scenario
    beforeEach(() => {
        cy.visit('/')
    })

    // This group of scenarios are focus on add a new computer, so we have  add computer, then a failing scenario
    // add
    it('add new computer', () => {
        cy.add_computer()
    })
    it('add new computer fail', () => {
        cy.add_computer_fail()
    })

    // This group is focus on editing an already registered computer
    // edit
    it('edit cumputer', () => {
        cy.edit_computer()
    })

    // This group is focus on removing a existing computer, we have a scenario that goes direct in the main screen and another one focus on the search of a already existing computer
    // remove
    it('delete computer" ', () => {
        cy.delet_computer()
    })
    it('delete computer from search" ', () => {
        cy.delete_computer_search()
    })  

    // This group is focus on searching like empty search and search by name
    // search
    it('empty search', () => {
        cy.empty_search()
    })
    it('search by name', () => { 
        cy.search_name()
    })
    
    // This group is focus on general validations like pagination, quantity sort, name sort, introduced sort, discontinued sort, company sort and home button
   // general validations
    it('validate pagination', () => {
        cy.sort_validation()
    })
    it('home top validation button', () => {
        cy.validation_home_top_button()
    })
    it('quantity computers validation', () => {
        cy.validation_qtd_computers()
    })
    it('computer name sort validation', () => {
        cy.validation_computer_name()
    })
    it('introduced sort validation', () => {
        cy.validation_introduced()
    })
    it('discontinued sort validation ', () => {
        cy.validation_discontinued()
    })
    it('company sort validation', () => {
        cy.validation_company()
    })
})