const productName = 'Apple Pomace';
describe('Carrinho', () => {

    before(() => {
        //cy.visit('https://juice-shop.herokuapp.com/#/login');
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        //cy.realizarLogin('dewoy99427@inikale.com','1836224481');
        cy.realizarLogin('palico8386@operades.com', '124578')
    });

    it('O item deve ser colocado no carrinho', () => {
        cy.visit('http://localhost:3000/#/search');
        cy.ColocandoProdutoCarrinho(productName);
        cy.contains('span', 'Your Basket').click();
        cy.get('mat-cell').contains(productName).should('exist');
    });
});