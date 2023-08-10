
describe('Проверка покупки на сайте staya.dog (этот тест падает.т.к на сайте постоянные изменения)', function () {
    
    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        
        cy.visit('https://staya.dog/').pageLoadTimeout;
        cy.get('[href="/catalog/harnesses"] > .category-link__canvas-wrapper > .category-link__canvas').click();
        cy.get(':nth-child(1) > .SProductCard__galleryWrapper > .CurtainGallery').click();
        cy.get('.SSpoiler__container > :nth-child(3)').click();
        cy.get('[style="--Param-columns: 2;"] > .SSpoiler > .SSpoiler__container > :nth-child(1)').click();
        cy.get('.CTA > .s-button__content').click();
        cy.contains('Оформить заказ');

        })
})