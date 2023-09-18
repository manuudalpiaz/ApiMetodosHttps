# Documentação da API

* Escolher um local do computador para criar o projeto
* Abrir o Git BASH nessa pasta

Com o Git BASH aberto executar o comando para criar a raíz do projeto:

```
mkdir NOME_PROJETO
```
Acessar a pasta
```
cd NOME_PROJETO
```
Comando para abrir o VSCode
```
code . 
```
Criar o arquivo gerenciador de pacotes node
```
npn init -y
```
Criar arquivo .gitignore na raíz do projeto
```
touch .gitignore
```
Criar arquivo .env: arquivo para reservar variáveis do projeto
```
touch .env
```

## Instalar os pacotes do projeto

Instalar pacotes para o projeto
```
npm i express nodemon dotenv
```

* express: sera o servidor da api
* nodemon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente 

Criar pasta 
```
mkdir src
```
Criar arquivo server.js dentro da pasta src
```
touch src/server.js
```
Adicionar arquivos e pastas no .gitignore
```
node_modules
.env
```
Adicionar a porta do servidor no arquivo .env
```
PORT = 3004
```
Configuração básica da API com express
```
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
```
Criar comando para rodar o servidor no arquivo package.json
```
"start":"nodemon src/server.js"
```