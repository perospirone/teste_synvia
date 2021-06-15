# Teste Synvia

### Como Rodar
```
$ git clone https://github.com/danitw/teste_synvia.git
$ cd teste_synvia
$ yarn
$ yarn start
```


### Para rodar precisa de um banco de dados postgres, as credenciais do banco estão no knexfile.js
### Depois de rodar o banco rode as migrations: npx knex migrate:latest
### Depois de rodar as migrations rode as seeds: npx knex seed:run

### Deploy feito no heroku: https://processo-seletivo-synvia.herokuapp.com/W