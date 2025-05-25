import routes from "./http/routes/index.routes"

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Centraliza todas as rotas
app.use('/api', routes);

app.listen(port, () => {
	console.log(`Rodando em http://localhost:${port}/`);
});
