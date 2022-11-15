## O projeto

Projeto criado para automatizar os testes das funcionalidades do site Alurapic. Nele aprendi a criar e configurar um projeto Node com o Cypress para automatizar os testes.
Utilizei o mochawesome para exibir um relatório com uma interface mais amigável.

## Os testes

- **API:** testes executados diretamente através da API onde busquei fotos específicas de um usuário e fiz o login dele.

- **Cadastro:** testes relacionados a tela de cadastro.

- **Flake-test:** foi criado com intúito de entender o que é um flake teste. Quando o teste tem comportamentos diferentes ou seja, em momentos ele irá passar e em outros ele irá apresentar erro.

- **Login:** testes relacionados a tela de login.

## Observações

O arquivo usuarios.js possui um array com dados para cadastro o qual é utilizado no cadastro.cy.js. Os dados são armazenados neste arquivo para fácil manutenção do código.

O arquivo cypress.env.json é para ficar dentro do .gitignore porém mantive ele fora para eu ter acesso a todos os arquivos por completo. As informações contidas nele são utilizadas nos testes. A informação fica neste arquivo para fácil manutenção do código.

## Dependências

Foi utilizado o Cypress e o mochawesome. Para instalação das dependências basta digitar o comando abaixo no terminal:<br>

`npm install`

## Comandos iniciais para iniciar um projeto base com o Cypress

- inicia um projeto node:<br>
`npm init`

- inicia um repositório git:<br>
`git init`

- instala o Cypress:<br>
`npm install cypress`

- abre a interface do Cypress:<br>
`npx cypress open`

- instala junit:<br>
`npm install junit`
