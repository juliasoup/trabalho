const express = require('express');
const sequelize = require('./config/database'); 
const User = require('./models/User'); 

const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Servidor rodando e funcionando!');
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




