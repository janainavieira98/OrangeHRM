Cypress.Commands.add('login', (email, senha)  => { 

    cy.visit('');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(email)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(senha, { sensitive: true })
    cy.get('.oxd-button').click()
    
 })