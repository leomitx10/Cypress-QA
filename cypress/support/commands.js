Cypress.Commands.add('DesativarCookies', () => {
    cy.clearCookies();

    cy.clearLocalStorage();

    cy.window().then((window) => {
        window.sessionStorage.clear();
    });

    cy.get('a[aria-label="dismiss cookie message"]')
        .should('be.visible')
        .click();

    cy.contains('span', 'Dismiss')
        .should('be.visible')
        .click();
});

Cypress.Commands.add('realizarLogin', (email, senha) => {
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('.mat-button-wrapper').contains('Log in').click();
});

Cypress.Commands.add('realizarCadastro', (email, senha) => {

    if (email) {
        cy.get('#emailControl').clear().type(email);
    }

    if (senha) {
        cy.get('#passwordControl').clear().type(senha);
    }

    cy.contains('h1', 'User Registration').click();
});

/*
  @param {string} text
*/
Cypress.Commands.add('verificarElementoMenu', (text) => {
    switch (text) {
        case 'Contact':
        case 'Company':
            cy.get('h3.mat-subheader.side-subHeader').contains(text).should('be.visible');
            break;

        case 'Customer Feedback':
        case 'Complaint':
        case 'Support Chat':
        case 'About Us':
        case 'Photo Wall':
        case 'Deluxe Membership':
            cy.contains('span.menu-text', text).click();
            cy.ProcuraPalavraNaTela(text);
            break;
        case 'Help getting started':
            cy.contains('span.menu-text', 'Help getting started').click();
            cy.get('#cancelButton').click();
            break;

        case 'GitHub':
            cy.contains('span.menu-text', text).click();
            break;

        case 'menu':
            cy.get('mat-icon').contains('menu').click();
            break;

        default:
            throw new Error(`Texto "${text}" não encontrado nos seletores disponíveis.`);
    }
});

Cypress.Commands.add('ProcuraPalavraNaTela', (palavra) => {
    cy.contains(palavra).then((elemento) => {
        if (elemento.length > 0) {
            cy.wrap(elemento).should('be.visible');
        } else {
            cy.contains(palavra).should('be.visible');
        }
    });
});

Cypress.Commands.add('uploadImage', (imageName) => {
    cy.get('input[type="file"]').attachFile(imageName);
    cy.get('input[formcontrolname="caption"]').type('Teste');
    cy.contains('span.mat-button-wrapper', 'Submit').click();
    cy.contains('button.mat-button-base', 'X').click();
});

Cypress.Commands.add('contaElementosPhotoWall', (selector) => {
    return cy.get(selector).then((elements) => elements.length);
});

Cypress.Commands.add('uploadVerificaNumeriElementosPhotoWall', (fileName, selector, expectedCount) => {
    cy.uploadImage(fileName);
    cy.contains('span.mat-button-wrapper', 'Submit').click();
    cy.get(selector).should('have.length', expectedCount);
});

Cypress.Commands.add('pesquisar', (word) => {
    cy.get('input[matinput]').clear();
    cy.get('input[matinput]').type(`${word}{enter}`);
});

Cypress.Commands.add('ColocandoProdutoCarrinho', (productName) => {
    cy.get('mat-card').contains('.item-name', productName)
        .parents('mat-card')
        .within(() => {
            cy.get('button[aria-label="Add to Basket"]').click();
        });
});

Cypress.Commands.add('detalhesProduto', (productName) => {
    cy.contains('.item-name', productName) 
      .closest('mat-card') 
      .find('img[mat-card-image]') 
      .click(); 

    cy.contains('h4', 'Write a review').should('be.visible'); 
});

Cypress.Commands.add('preencherFormularioEndereco', (pais, nome, telefone, cep, endereco, estado, cidade) => {
    cy.get('input[placeholder="Please provide a country."]').type(pais);
    cy.get('input[placeholder="Please provide a name."]').type(nome);
    cy.get('input[placeholder="Please provide a mobile number."]').type(telefone);
    cy.get('input[placeholder="Please provide a ZIP code."]').type(cep);
    cy.get('#address').type(endereco); 
    cy.get('input[placeholder="Please provide a state."]').type(estado);
    cy.get('#mat-input-8').type(cidade);
  });

Cypress.Commands.add('quantidadeProduto', (productName, buttonIndex) => {
    cy.contains('mat-row', productName)
      .should('exist')
      .within(() => {
        cy.get('button.mat-icon-button').eq(buttonIndex).click();
      });
  });
  