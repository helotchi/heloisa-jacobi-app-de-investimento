import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';
    this.get("/stocks", () => [
      {
        id: 1,
        name: "Teste1"
      },
      {
        id: 2,
        name: "Teste2",
      }
    ])
  }
})