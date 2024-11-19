describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/register');
    });

    it('Email invalido sem nada apos arroba', () => {
        cy.DesativarCookies();
        cy.realizarCadastro('teste@');
        cy.contains('Email address is not valid.').should('be.visible');
    });

    it('Email invalido sem nada antes do arroba', () => {
        cy.realizarCadastro('@gmail.com');
        cy.contains('Email address is not valid.').should('be.visible');
    });

    it('Email invalido sem dominio', () => {
        cy.realizarCadastro('leo@gmail.');
        cy.contains('Email address is not valid.').should('be.visible');
    });

    it('Senha invalida com 3 caracteres', () => {
        cy.realizarCadastro(undefined, '123');
        cy.contains('Password must be 5-40 characters long').should('be.visible');
    });

    it('Senha invalida com 41 caracteres', () => {
        cy.realizarCadastro(undefined, '01234567890123456789012345678901234567890123456789');
        cy.contains('Password must be 5-40 characters long').should('be.visible');
    });
});
