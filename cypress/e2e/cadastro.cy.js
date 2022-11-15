describe('Verifica mensagens cadastro e login', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verifica mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('RafaelRabeloDaSilva');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagem usuário disponível', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('iusdfhapisbifuasdf6a');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'User available').should('be.visible');
    })

    it('Verifica mensagem user name com máximo de 30 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('iusdfhapisbifuasdf6a5sd1f65a1sdfsdrthw');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('Verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica mensagem user name Must be lower case', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('RAFAELRABELODASILVA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    // irá buscar o arquivo de usuários para cadastro para buscar dados para cadastro
    const usuarios = require('../fixtures/usuarios.json')
    // usado foreach para efetuar o cadastro para cada usuario que está no arquivo usuarios.json (iterando)
    usuarios.forEach(usuario => {
        it(`Registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
})