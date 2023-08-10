
describe('Проверка проигрывания музыки незарегистрированным пользователем)', function () {
    
    it('Зайти и обновить страницу', function () {
        
        cy.visit('https://music.yandex.ru/home');
        cy.reload();
        cy.get(':nth-child(1) > .promo-slider-item > .promo-slider-item__wrapper > .promo-slider-item__cover > .promo-slider-item__cover-link > .deco-pane').click();
        cy.get('.page-playlist__controls > .button-play').click();
        cy.wait(10000).get('.player-controls__btn_play > .d-icon').click();
     

        })
})