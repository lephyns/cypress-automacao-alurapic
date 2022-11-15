describe('Loga usuário', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Faz login com usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Faz login com usuário inválido', () => {
        cy.login('jaqueline', '1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})