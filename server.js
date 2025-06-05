const express = require('express');
const path = require('path');
const app = express();

// Serve os arquivos estáticos do React (pasta build)
app.use(express.static(path.join(__dirname, 'client/build')));

// Rota fallback: serve index.html para qualquer rota desconhecida
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Porta usada no Azure (ou 3000 localmente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
