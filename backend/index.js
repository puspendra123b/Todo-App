const express  =require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return
    }
    await Todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo created successfully"
    })
})

app.get('/todos', async (req, res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async (req, res)=>{
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return
    }

    await Todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : " Todo is done"
    })

})

app.listen(3000);