// O teste abaixo roda um "flake teste" ou seja, quando o usuário aperta várias vezes seguidas em "Run all tests" na interface 
// gráfica do cypress (rodar várias vezes o teste), as vezes ele passa como sucesso e em outras vezes ele falha isso é chamado de "flake teste"

describe('Busca fotos e dados', () => {

    const tempoEsperado = Math.random() * 2000;

    it.only('Busca fotos do usuário flávio', () => {
        cy.request({
            method: "GET",
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})