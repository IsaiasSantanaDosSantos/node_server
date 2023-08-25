const http = require('http');

// Criando um servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('Olá, mundo!');
});

// Definindo a porta na qual o servidor irá ouvir
const PORT = 3000;

// Iniciando o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
