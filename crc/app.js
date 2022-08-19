import express from 'express';

const app = express();
app.use(express.json())

const clientes =[
    {id: 1,nome: "jozenildo", cpf:"123.144.222-05"},
    {id: 2,nome: "lima", cpf:"123.144.222-05"}
]

//Rota Principal
    app.get('/',(req,res)=>{
    res.status(200).send("Pagina Inicial")

})

//Status Cliente
    app.get('/clientes', (req,res)=>{    
    res.status(200).json(clientes)})



//cadastro novo cliente
    app.post('/clientes', (req,res)=>{
    clientes.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso")
})


//funcção realizar a busca por id
function buscarClientes(id){
    return clientes.findIndex(cliente => cliente.id == id )
}

//consultar cliente por id 
app.get('/clientes/:id', (req,res) => {
    let index = buscarClientes(req.params.id)
    res.json(clientes[index])
})


//atualizar os clientes por id
app.put('/clientes/:id',(req,res) => {
    let index = buscarClientes(req.params.id)
    clientes[index] = req.body
    res.json(clientes) 
})

//excluir cliente por id 
app.delete('/clientes/:id',(req,res)=> {
    let index = buscarClientes(req.params.id)
    clientes.splice(index,1)
    res.send ("Cliente excluido com sucesso")
})



export default app