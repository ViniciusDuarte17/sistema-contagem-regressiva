import { AddressInfo } from "net";
import express from "express";
import { dayChristmas } from "./routes/christmas";
import { dayEaster } from "./routes/easter";
import { routerAge } from "./routes/age";



const app = express();

app.use(express.json());

app.use("/natal", dayChristmas)

app.use("/pascoa", dayEaster)

app.use("/idade", routerAge)

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});