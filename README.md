# Dev Club Hamburgueria - Desafio

Este projeto é uma API em Node.js para gerenciar pedidos de uma hamburgueria. Ele permite que os clientes façam pedidos, consultem o status de seus pedidos e atualizem ou excluam seus pedidos, e que a equipe da hamburgueria gerencie todos os pedidos.

## Tecnologias utilizadas
- Node.js
- Express
- UUID

## Como executar o projeto
1. Clone o repositório para sua máquina local
2. Instale as dependências do projeto com o comando `npm install`
3. Execute o projeto com o comando `npm start`

## Como utilizar a API
### Endpoints
A API possui os seguintes endpoints:

- `GET /order`: Retorna uma lista de todos os pedidos.
- `POST /order`: Cria um novo pedido com as informações de ordem, nome do cliente e preço. O status é definido como "Em preparação".
- `GET /order/:id`: Retorna um pedido específico pelo ID.
- `PUT /order/:id`: Atualiza as informações de um pedido específico pelo ID.
- `PATCH /order/:id`: Atualiza o status de um pedido para "pronto".
- `DELETE /order/:id`: Exclui um pedido específico pelo ID.
## Considerações finais

Este projeto foi criado como parte de um desafio proposto pelo Dev Club. Ele foi desenvolvido com o objetivo de fornecer uma solução simples e funcional para gerenciamento de pedidos de uma hamburgueria. Espero que seja útil para quem precisar de uma API semelhante.
