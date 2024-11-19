# Testes Automatizados - OWASP Juice Shop 

<p align="justify">&emsp;&emsp;Este repositório contém uma suíte de testes automatizados utilizando Cypress, desenvolvida para garantir a qualidade e funcionamento das funcionalidades principais do sistema. Abaixo, você encontrará a estrutura do projeto, instruções de instalação e execução, além de descrições dos testes presentes.</p>

## OWASP Juice Shop 

<p align="justify">&emsp;&emsp;O OWASP Juice Shop é uma aplicação web de código aberto que simula uma loja online, projetada especificamente para praticar e aprender sobre segurança da informação. Foi criada pela organização OWASP (Open Web Application Security Project) e é uma das plataformas mais populares para treinar em segurança web e hacking ético.</p>

## Pré-requisitos
- Node.js
- Cypress

## Configuração de ambiente
<p align="justify">&emsp;&emsp;Siga os passos abaixo para configurar o ambiente de testes:</p>

git clone https://github.com/

## Instale as dependências do projeto:
```
npm install cypress
```
```
npm install --save-dev cypress-file-upload
```

## Executando os Testes
<p align="justify">&emsp;&emsp;Para executar os testes, você tem duas opções:</p>

Modo Interativo: Abra a interface do Cypress para executar os testes manualmente.

```
npx cypress open
```
Modo Headless: Execute todos os testes no modo headless (sem interface), ideal para integração contínua.
```
npx cypress run
```

## Importante
<p align="justify">
  &emsp;&emsp;Os testes automatizados foram realizados com o projeto rodando localmente. Para reproduzir o ambiente e executar os testes de forma similar, siga as instruções detalhadas disponíveis no repositório do projeto. Você pode acessar o repositório clicando no link abaixo:
  <a href="https://github.com/juice-shop/juice-shop" target="_blank">https://github.com/juice-shop/juice-shop</a>
</p>

