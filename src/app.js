const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({msg: 'olá'})
})

app.listen(3000, () => {
    console.log('API rodando!');
});
