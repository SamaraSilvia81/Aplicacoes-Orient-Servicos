const express = require('express');
// const body-parser = require('body-parser')
const app = express();
const port = 3010;
const path = require('path');

// Definindo uma variável global
const vetor = [];

// Recebe qualquer coisa por url
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Recebe qualquer coisa por form
// parse application/json
app.use(express.json());

// axios
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

// "resolve" transforma a variável em absoluta
app.get('/form', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/vetor', (req, res) => {
  res.json({
    value: vetor,
  });
});

app.post('/vetor', (req, res) => {
  if (isNaN(req.body.value)) {
    res.send(`Erro ao adicionar valor: '${req.body.value}' ao vetor`);
  } else {
    vetor.push(req.body.value);
    res.send(`O valor '${req.body.value}' foi inserido com sucesso!`);
    res.json({
      // message: 'Valor inserido com sucesso!!',
      value: `${vetor}`,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
