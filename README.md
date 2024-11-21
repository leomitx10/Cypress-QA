# Testes Automatizados - OWASP Juice Shop 

<p align="justify">&emsp;&emsp;Este repositório contém uma suíte de testes automatizados utilizando Cypress, desenvolvida para garantir a qualidade e funcionamento das funcionalidades principais do sistema. Abaixo, você encontrará a estrutura do projeto, instruções de instalação e execução, além de descrições dos testes presentes.</p>

## OWASP Juice Shop 

<p align="justify">&emsp;&emsp;O OWASP Juice Shop é uma aplicação web de código aberto que simula uma loja online, projetada especificamente para praticar e aprender sobre segurança da informação. Foi criada pela organização OWASP (Open Web Application Security Project) e é uma das plataformas mais populares para treinar em segurança web e hacking ético.</p>

## Pré-requisitos
- Node.js
- Cypress
- Mochawesome

## Configuração de ambiente
Siga os passos abaixo para configurar o ambiente de testes:

## Clone o repositório
```
git@github.com:leomitx10/Cypress-QA.git
```
## Instale as dependências do projeto:

O Cypress é a base do nosso projeto de testes. 

```
npm install cypress
```
O cypress-file-upload é uma biblioteca que facilita a simulação de uploads de arquivos:
```
npm install --save-dev cypress-file-upload
```
O mochawesome é uma biblioteca para geração de relatórios detalhados dos resultados dos testes.
```
npm install mochawesome
```


## Executando os Testes
Para executar os testes, você tem duas opções:

Modo Interativo: Abra a interface do Cypress para executar os testes manualmente.

```
npx cypress open
```
Modo Headless: Execute todos os testes no modo headless (sem interface), ideal para integração contínua.
```
npx cypress run
```
## Estrutura do Projeto

### Diretórios e Arquivos

#### `cypress/e2e`
Contém os testes automatizados para as seguintes funcionalidades:
- Cadastro de usuários
- Login
- Navegação no menu
- Exibição do photo wall
- Gerenciamento do carrinho
- Fluxo completo de compra

#### `cypress/support/commands.js`
Inclui a implementação das funções personalizadas utilizadas nos testes.

#### `cypress/videos`
Armazena as gravações das execuções dos testes automatizados.

#### `cypress/screenshots`
Guarda as capturas de tela dos testes que apresentaram falhas.

#### `cypress/results`
Contém os relatórios dos testes gerados em formatos JSON e HTML.


## Importante
<p align="justify">
  &emsp;&emsp;Os testes automatizados foram realizados com o projeto rodando localmente. Para reproduzir o ambiente e executar os testes de forma similar, siga as instruções detalhadas disponíveis no repositório do projeto. Você pode acessar o repositório clicando no link abaixo:
  <a href="https://github.com/juice-shop/juice-shop" target="_blank">https://github.com/juice-shop/juice-shop</a>
</p>

