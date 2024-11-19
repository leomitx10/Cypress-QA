describe('Main_page', () => {
    before(() => {
        //cy.visit('https://juice-shop.herokuapp.com/#/login');
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        //cy.realizarLogin('dewoy99427@inikale.com','1836224481');
        cy.realizarLogin('palico8386@operades.com', '124578')
    });

    it('Pesquisar produto disponível', () => {
        cy.visit('http://localhost:3000/#/search');
        cy.get('mat-icon').contains('search').click();
        cy.pesquisar('banana');
        cy.contains(/banana/i).should('be.visible');
    });

    it('Pesquisar produto indisponível', () => {
        cy.visit('http://localhost:3000/#/search');
        cy.pesquisar('ovo');
        cy.contains('span.noResultText', 'No results found').should('be.visible');
    });

    it('Adicionar item ao carrinho', () => {
        cy.visit('http://localhost:3000/#/product-page');

        const productName = 'Apple Pomace';
        cy.ColocandoProdutoCarrinho(productName);

        cy.get('button[aria-label="Show the shopping cart"]').click();

        cy.get('mat-row').contains(productName).should('be.visible');
    });

    it('Deve abrir os detalhes do produto ao clicar na imagem dele', () => {
        cy.visit('http://localhost:3000/#/product-page');
        const productName = 'Apple Pomace';
        cy.detalhesProduto(productName);
    });
});