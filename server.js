//const http = require('http');
import { appendFileSync } from 'fs';
import app from './crc/app.js';

const port = 8000;

//const rotas = 
//{
 //   '/':'Pagina Principal',
 //   '/cadastro':'Cadastro de Clientes',
 //   '/consulta': 'Consultar Cliente'
//}
//const server = http.createServer((req,res) =>{

   // res.writeHead(200,{'contet-Type': 'text/plain'})
   // res.end(rotas[req.url])
    
//})

app.listen(port,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

