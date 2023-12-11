const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
