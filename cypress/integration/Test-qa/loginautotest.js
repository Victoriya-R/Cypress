
describe('Проверка формы логина', function () {

    it('Позитивный кейс:верные логин и пароль', function () {
         cy.visit('https://login.qa.com/');
         cy.get('#mail').type('валиднная почта'); 
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('валидный пароль');
         cy.get('#loginButton').should('not.be.disabled');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')

     })

     it('Негативный кейс:верные логин и неверный пароль', function () {
        cy.reload();
        cy.get('#mail').type('валидная почта'); 
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('неверный пароль');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');

 })


})
