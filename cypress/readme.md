# Testes automatizados - BA.GOV
Projeto com finalidade de automação de testes de API (back-end) para o BA.GOV, utilizando o framework Cypress.  
 
##### Requisitos necessário:
Node.js
Mochawesome
 
##### Estrutura de pastas:
**e2e**: Contém os cenários para cada rota.
**results**: Contém os resultados dos cenários de cada rota após rodar o teste no terminal.
**screenshots**: Contém as capturas de tela dos cenários que deram resultado negativo após rodar o teste no terminal.
**support**: Organiza os comandos que serão utilizados nos cenários de teste.
 
##### Instalação e execução
* Clonar o repositório  
 
      git clone - http://git.sec.ba.gov.br/sigeduc1/testes-automatizados/back/testes-automatizados-da-api-sigeduc.git
 
* Em um terminal, dentro da pasta do projeto, execute o seguinte comando para instalar as dependências
 
      npm install
      npm install cypress --save-dev
      npm install --save-dev mochawesome
 
* Abrir o Cypress
           
  Executar cenários no modo GUI (Interface Gráfica do Usuário):  
 
      npx cypress open
 
  Executar todos cenários no modo headless (no terminal):
 
      npx cypress run
 
  Executar apenas o cenário especificado no modo headless:
 
      npx cypress run --spec `[caminho-para-spec]`
 
### Autores
 **Nathalie Evangelista e Maurício Dias.**