# Mockserver - Projeto de Estudos em Node.js

Este repositório foi criado para praticar conceitos fundamentais de Node.js e do ecossistema npm, com foco em:

- execução de scripts com npm;
- gerenciamento de dependências;
- criação de servidor HTTP;
- consumo de webservice no front-end.

O projeto possui:

- um front-end simples para busca/listagem de filmes;
- um webservice local que retorna um JSON com dados de filmes;
- uso do pacote `serve` para disponibilizar o front-end.

## Objetivos de estudo

- Entender comandos importantes do npm, como `npm install`, `npm list` e `npm run`.
- Diferenciar `dependencies` e `devDependencies` no `package.json`.
- Praticar comunicação HTTP entre cliente (front-end) e servidor (webservice).
- Trabalhar com dados em formato JSON.

## Tecnologias utilizadas

- Node.js
- npm
- JavaScript (ES Modules)
- HTTP nativo do Node (`node:http`)
- `serve` (para servir arquivos estáticos)
- Express (instalado como dependência para estudos)

## Estrutura do projeto

```text
mockserver/
|- dist/
|  |- index.html
|  |- app.js
|  |- styles.css
|  |- banner.png
|- webservice/
|  |- server.js
|- index.js
|- package.json
|- README.md
```

## Como executar

### 1) Instalar dependências

Na raiz do projeto, execute:

```bash
npm install
```

### 2) Iniciar o front-end (porta 3000)

Ainda na raiz do projeto:

```bash
npm run start
```

Esse script executa:

```bash
npx serve -p 3000 ./dist
```

### 3) Iniciar o webservice (porta 3001)

Em outro terminal, execute:

```bash
node webservice/server.js
```

### 4) Testar no navegador

- Acesse `http://localhost:3000`
- Clique no botão **Buscar Filmes**
- O front-end fará uma requisição para `http://localhost:3001` e exibirá os filmes retornados em JSON.

## Comandos npm importantes (estudo)

### Listar pacotes instalados

```bash
npm list
```

### Instalar uma dependência

```bash
npm install <nome-do-pacote>
```

### Executar script definido no package.json

```bash
npm run <nome-do-script>
```

No projeto atual, por exemplo:

```bash
npm run start
```

## Dependências no package.json

- `dependencies`: pacotes usados para rodar o projeto (ex.: `serve`, `express`).
- `devDependencies`: pacotes usados no desenvolvimento (ex.: `typescript`).

## API local (webservice)

O webservice responde em:

```text
GET http://localhost:3001
```

Retorno: lista de objetos com informações de filmes, incluindo:

- `id`
- `title`
- `genre`
- `synopsis`

## Autor

Felipe Fonseca
