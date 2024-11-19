describe('Menu', () => {
    before(() => {
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        cy.realizarLogin('palico8386@operades.com','124578');
    });

    it('Abrir Menu', () => {
        cy.verificarElementoMenu('menu');
    });

    it('Verificar "Contact"', () => {
        cy.verificarElementoMenu('Contact');
    });

    it('Verificar "Company"', () => {
        cy.verificarElementoMenu('Company');
    });

    it('Verificar "Customer Feedback"', () => {
        cy.verificarElementoMenu('Customer Feedback');
    });

    it('Verificar "Complaint"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('Complaint');

    });

    it('Verificar "Support Chat"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('Support Chat');

    });

    it('Verificar "About Us"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('About Us');

    });

    it('Verificar "Photo Wall"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('Photo Wall');

    });

    it('Verificar "Deluxe Membership"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('Deluxe Membership');
    });
    
 /* TENTAR DNV DEPOIS
    it('Verificar "Help getting started"', () => {
        cy.verificarElementoMenu('menu');
        cy.verificarElementoMenu('Help getting started');

    });

   
    it('Verificar "GitHub"', () => {
        cy.verificarElementoMenu('menu');

    });*/
});