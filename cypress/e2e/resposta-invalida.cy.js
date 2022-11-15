describe('Simulando resposta inválida', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')

    // Simulando resposta de usuário inválido. 
    cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {statusCode: 400}).as('stubPost')
  })

  it('Faz login de usuario valido', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'));
    cy.wait('@stubPost');
    cy.contains('a', '(Logout)').should('be.visible');
  })
})