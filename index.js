const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

//Lee y responde archivos enviados del urlencoded (Formularios, etc)
app.use(express.urlencoded({extended : true}))

app.use(express.static('public')); //busca los archivos estaticos (archivo que contiene código fuente {html,css,imagenes,etc}) en public

console.log(__dirname + '/public'); //Imprime la ruta del public


//Enviar archivos html
app.get('/', (req, res) =>{
    res.status(200).sendFile('index.html');
});

app.get('/redirect', (req, res) => {
    res.status(302).redirect('./')
});

app.get('/formulario', (req, res) => {
    res.status(302).redirect('formulario.html')
});

app.listen(PORT, (err) =>{
    if (err) throw err;
    console.log(`Servidor situadio en http://localhost:${PORT}`)
})
