describe('Teste de Edição de Usuário Administrador', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('')
    })

    it('Deve editar um usuário administrador com sucesso', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-table-body') 
        .contains('Peter')  
        .closest('.oxd-table-row')  
        .find('button > i.oxd-icon.bi-pencil-fill')   
        .click() 
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Carol')
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Testa1232')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Testa1232')
        cy.contains('.oxd-button--secondary', 'Save').click()
        
        cy.get('.oxd-text--toast-message').contains('Successfully Updated').should('be.visible')
    })
})


