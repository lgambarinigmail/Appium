
// Here we have a function that focus on fill computer forms
export function fillComputerForm(name, introducedDate, discontinuedDate, company) {
    cy.get('#name').type(name)
    cy.get('#introduced').type(introducedDate)
    cy.get('#discontinued').type(discontinuedDate)
    cy.get('#company').select(company)
}