describe('Realizar login no site da saucedemo com usuário administrador', () => {
    const usuario = {email: 'Peter', senha: 'Teste1234'}

    it('Realizar login com usuário administrador com sucesso', () => {
        cy.visit('');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(usuario.email)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(usuario.senha, { sensitive: true })
        cy.get('.oxd-button').click()
    })
})