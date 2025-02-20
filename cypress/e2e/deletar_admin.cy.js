describe('Teste de Remoção de Usuário Administrador', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('')
    })

    it('Deve remover um usuário administrador com sucesso', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-table-body') 
        .contains('Carol')  
        .closest('.oxd-table-row')  
        .find('button > i.oxd-icon.bi-trash')   
        .click() 
        cy.get('.oxd-button--label-danger')  
        .click()

        cy.get('.oxd-text--toast-message').contains('Successfully Deleted').should('be.visible')
    })
})
