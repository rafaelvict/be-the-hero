const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informção no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizados para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc..
  */


  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);