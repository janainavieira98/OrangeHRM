describe('Teste de Cadastro de Empregador', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('')
    })

    it('Deve cadastrar um  novo usuário do tipo empregador com sucesso sem criar credenciais de login', () => {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
       
        cy.get('input.oxd-file-input').selectFile('C:/orangehrm-cypress/gatinho.jpeg', {force: true})
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tomas')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Camargo')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('0909')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-text--toast-message').contains('Successfully Saved').should('be.visible')

        //Preencher formulário personal details
        cy.get(':nth-child(1) > .orangehrm-tabs-item').click()
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('div', 'Brazilian').trigger('mouseover').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('div', 'Single').trigger('mouseover').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').
        type('2022-12-01{enter}').trigger('change');
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.get('.oxd-text--toast-message').contains('Successfully Updated').should('be.visible')

      
    })
})


