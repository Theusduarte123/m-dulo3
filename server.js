const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_empregados": "/empregados",
  "/adicionar_empregado": "/empregados",
  "/editar_empregado/:id": "/empregados/:id",
  "/deletar_empregado/:id": "/empregados/:id"
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
