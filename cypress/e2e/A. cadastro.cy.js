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
    
    it('Cadastro Valido', () => {
        cy.get('#emailControl').clear().type('palico8386@operades.com');
        cy.get('#passwordControl').clear().type(124578);
        cy.get('#repeatPasswordControl').clear().type(124578);
        cy.get('#mat-select-value-1').click();
        cy.contains('span.mat-option-text', 'Your eldest siblings middle name?').click();
        cy.get('#securityAnswerControl').type('isa');
        cy.contains('span.mat-button-wrapper', 'Register').should('be.visible').click();
        cy.contains('span.mat-simple-snack-bar-content', 'Registration completed successfully. You can now log in.').should('be.visible');
    });
});