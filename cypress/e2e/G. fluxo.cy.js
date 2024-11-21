describe('Fluxo de Cadastro Completo', () => {
  
  const userCredentials = {
    email: 'palico8386@operades.com',
    password: '124578',
  };

  const endereco = {
    country: 'Brazil',
    name: 'Leandro',
    phone: '2233344',
    zip: '74388',
    fullAddress: "Rua das Palmeiras, 432\nBloco B, Apartamento 56\nBairro Jardim das Flores\nSão Paulo, SP - 04567-890\nBrasil",
    state: 'California',
    city: 'Luziania',
  };

  const productName = 'Apple Pomace';
  const creditCard = {
    name: 'Leandro',
    number: '4111111111111111',
    month: '1',
    year: '2080',
  };

  before(() => {
    // Visita a página de login e realiza o login
    cy.visit('http://localhost:3000/#/login');
    cy.DesativarCookies();
    cy.realizarLogin(userCredentials.email, userCredentials.password);
  });

  it('Adicionar produto no carrinho', () => {
    // Preenche o formulário de endereço
    cy.visit('http://localhost:3000/#/address/create');
    cy.preencherFormularioEndereco(
      endereco.country,
      endereco.name,
      endereco.phone,
      endereco.zip,
      endereco.fullAddress,
      endereco.state,
      endereco.city
    );
    cy.get('.mat-button-wrapper').contains('Submit').click();
    cy.wait(2000);
    
    // Pesquisa e adiciona o produto ao carrinho
    cy.visit('http://localhost:3000/#/search');
    cy.ColocandoProdutoCarrinho(productName);
    cy.get('button[aria-label="Show the shopping cart"]').click();
  });

  it('Confirmar carrinho e prosseguir para o pagamento', () => {
    // Confirma o carrinho e vai para o pagamento
    cy.get('span.mat-button-wrapper:contains("Checkout")').click();
    cy.get('mat-radio-button.mat-radio-button').first().click(); // Escolhe a primeira opção
    cy.get('button[aria-label="Proceed to payment selection"]').click();
  });

  it('Confirmar forma de entrega', () => {
    // Confirma a forma de entrega
    cy.get('span.mat-radio-outer-circle').first().parents('mat-radio-button').click();
    cy.contains('span', 'Continue').click();
  });

  it('Adicionar cartão de crédito', () => {
    // Escolhe a opção de pagamento com cartão
    

    // Adiciona um novo cartão de crédito
    cy.contains('mat-expansion-panel-header', 'Add new card').click();
    cy.get('#mat-input-10').type(creditCard.name);
    cy.get('#mat-input-11').type(creditCard.number);
    cy.get('#mat-input-12').select(creditCard.month);
    cy.get('#mat-input-13').select(creditCard.year);
    cy.contains('Submit').click();

    cy.get('.mat-radio-button.mat-accent').first().click();

    // Prossegue para o próximo passo
    cy.contains('span', 'Continue').click();
  });

  it('Confirmar pagamento e finalizar compra', () => {
    // Confirma o pagamento
    cy.contains('span', 'Place your order and pay').click();
    cy.contains('Thank you for your purchase!').should('be.visible');
    cy.get('span.fa-layers-counter').should('have.text', '0');
  });

});
