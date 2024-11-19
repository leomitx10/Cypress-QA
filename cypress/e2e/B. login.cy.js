describe('Login', () => {
    it('Login Valido', () => {
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        cy.realizarLogin('palico8386@operades.com','124578');
        cy.contains('div', 'All Products').should('be.visible');
    })

    it('Login Invalido', () => {
        cy.visit('http://localhost:3000/#/login');
        cy.realizarLogin('erro@inikale.com','1836224481');
        cy.get('.error.ng-star-inserted').should('contain.text', 'Invalid email or password.'); 
    })
})