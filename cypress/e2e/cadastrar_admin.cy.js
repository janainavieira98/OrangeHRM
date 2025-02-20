describe('Teste de Cadastro de Usuário Administrador', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('')
    })

    it('Deve cadastrar um novo usuário administrador com sucesso', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        cy.contains('div', 'ESS').trigger('mouseover').click()
        
        cy.get('.oxd-autocomplete-text-input > input') 
        .focus()            
        .type('Emily Jones')
        .wait(3000)
        .type('{downarrow}')  
        .type('{enter}') 

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        cy.contains('div', 'Enabled').trigger('mouseover').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Peter')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Teste1234')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Teste1234')
        cy.contains('.oxd-button--secondary', 'Save').click()
        cy.get('.oxd-text--toast-message').contains('Successfully Saved').should('be.visible')
        cy.location('pathname').should('eq', '/web/index.php/admin/viewSystemUsers')

      
    })
})


