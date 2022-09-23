* O objetivo é criar uma api como base, para cadastro de filmes, com um endpoint administrativo (usando login e senha) para cadastrar os filmes.
Os filmes devem conter:
Titulo
Capa
Cover
Ano de lançamento
Generos
Média IMDB

## Os métodos para o filme

Pegar um

Pegar de 10 em 10 (paginação)
Pegar de 10 em 10 por nome (paginação)
Pegar de 10 em 10 por gênero (paginação) 
Pegar de 10 em 10 em um intervalo de tempo (por ano lançado) (paginação) (bonus)
Pegar de 10 em 10 ordenado por ano lançado (paginação) (bonus)
Pegar de 10 em 10 ordenado por média (paginação) (bonus)
Todos essas condições serem feitas em um unico endpoint (bonus+)

Favoritar um filme
Retornar filmes favoritados (bonus)
Criar um filme (só admin)
Editar um filme (só admin)
Deletar um filme (só admin)
Login (só admin)
Logout (só admin)

Todos os metodos devem respeitar o REST FULL.
Usar typescript
Usando o NestJS, TypeORM e o Swagger (para fazer a documentação)
Usando os conceitos de service, repository e controller
Usar o Postgres como banco de dados
Criar testes para chamada usando JEST (bonus)
Usar as convenções de commit (bonus)
Criar uma interface basica para acessar a api (bonus+)