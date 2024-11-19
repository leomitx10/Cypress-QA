describe('Carrinho', () => {
    before(() => {
        //cy.visit('https://juice-shop.herokuapp.com/#/login');
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        //cy.realizarLogin('dewoy99427@inikale.com','1836224481');
        cy.realizarLogin('palico8386@operades.com', '124578')
    });

    it('Diminuir um item repetido do carrinho', () => {
        cy.visit('http://localhost:3000/#/search');

        cy.ColocandoProdutoCarrinho();
        cy.visit('http://localhost:3000/#/search');
        cy.ColocandoProdutoCarrinho();

        cy.get('svg.fa-minus-square').click();

    });
});
