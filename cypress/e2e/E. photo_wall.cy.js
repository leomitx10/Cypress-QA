import 'cypress-file-upload';

describe('Photo Wall', () => {
    before(() => {
        cy.visit('http://localhost:3000/#/login');
        cy.DesativarCookies();
        cy.realizarLogin('palico8386@operades.com', '124578');
    });
    
    it('Deve adicionar uma imagem ao Photo Wall após o upload', () => {
        cy.visit('http://localhost:3000/#/photo-wall');

        const selector = 'span.container.mat-elevation-z6.ng-star-inserted';

        cy.contaElementosPhotoWall(selector).then((initialCount) => {
            cy.log(`Quantidade inicial de elementos: ${initialCount}`);

            cy.uploadVerificaNumeriElementosPhotoWall('CapturaDeTela.png', selector, initialCount + 1).then(() => {
                cy.contaElementosPhotoWall(selector).then((newCount) => {
                    cy.log(`Quantidade após o primeiro upload: ${newCount}`);
                });
            });
        });
    });
});
