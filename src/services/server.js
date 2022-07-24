import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';
    this.get("/stocks", () => [
      {
        id: "AAPL34",
        name: "Apple",
        value: 84.66,
      },
      {
        id: "AMZO34",
        name: "Amazon",
        value: 4.49,
      },
      {
        id: "COCA34",
        name: "Coca Cola",
        value: 59.41,
      },
      {
        id: "DISB34",
        name: "The Walt Disney",
        value: 37.60,
      },
      {
        id: "MCDC34",
        name: "McDonalds",
        value: 69.30,
      },
      {
        id: "MSFT34",
        name: "Microsoft",
        value: 59.64,
      },
      {
        id: "GOGL34",
        name: "Google",
        value: 3.94,
      },
      {
        id: "TWTR34",
        name: "Twitter",
        value: 109.43,
      },
      {
        id: "MELI34",
        name: "Mercado Livre",
        value: 34.86,
      },
      {
        id: "TSLA34",
        name: "Tesla Motors",
        value: 139.98,
      },
    ])
  }
})