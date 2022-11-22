const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_perificos": "/perifericos",
  "/adicionar_periferico": "/perifericos",
  "/editar_periferico/:id": "/perifericos/:id",
  "/deletar_periferico/:id": "/perifericos/:id"
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
