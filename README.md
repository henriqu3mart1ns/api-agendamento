API REST para implementar CRUD de tabela usuarios no MySQL (Backend) e Formulário para acessá-la (Frontend)
Turma: 2ADS

## Equipe de Desenvolvimento

| Integrantes |
|------------|
| Henrique Martins |
| Eduardo Mendes |
| Vitor Hugo |
# Sistema de Agendamento

Sistema de agendamento desenvolvido para fins acadêmicos utilizando Node.js, Express, Knex e MySQL.

A aplicação permite o gerenciamento de agendamentos por meio de operações CRUD (Create, Read, Update e Delete), possibilitando cadastrar, visualizar, editar e remover registros de agendamentos de forma simples e intuitiva.

O backend foi desenvolvido seguindo o padrão de API REST, realizando a comunicação com um banco de dados MySQL através do Knex.js. Já o frontend foi construído com HTML, CSS e JavaScript, consumindo os endpoints da API para exibição e manipulação dos dados.

## Funcionalidades

* Cadastro de novos agendamentos
* Listagem de agendamentos cadastrados
* Edição de informações de agendamentos
* Exclusão de registros
* Integração entre frontend e backend

## Tecnologias Utilizadas

* Node.js
* Express.js
* Knex.js
* MySQL
* HTML5
* CSS3
* JavaScript

## Objetivo

O projeto tem como objetivo aplicar conceitos de desenvolvimento web, APIs REST, integração com banco de dados e operações CRUD, proporcionando uma experiência prática na construção de aplicações completas com frontend e backend integrados.




## Passo a Passo para Rodar o Projeto

### Instalar as dependências

```bash
npm install
```

### Criar o banco de dados

```sql
CREATE DATABASE agendamento;
```

### Executar as migrations

```bash
npx knex migrate:latest
```

### Iniciar o servidor

```bash
npm run dev
```
