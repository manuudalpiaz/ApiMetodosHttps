// importar o pacote express
const express = require('express');

// instanciar o express na variável app
const app = express();

// Recuperar o pacote dotenv
const dotenv = require('dotenv').config();

// importanto variável do arquivo .env
const PORT = process.env.PORT

// Testando o servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}!`));
