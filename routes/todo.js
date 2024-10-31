const express = require('express');
const router = express.Router();

let todos = [
   {
    id :1, task: "Belajar Node.js", complated: false
   },
   {
    id :2, task: "Membuat API", complated: false
   },
];

router.get('/',(req,res)=>{res.json(todos);});

router.post('/',(req,res) => {
    const newTodo = {
        id: todos.length + 1,
        task:req.body.task,
        complated:false
    };
    todos.push(newTodo);
    res.status(201),json(newTodo);
});

module.exports = router;