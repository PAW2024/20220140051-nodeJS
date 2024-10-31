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

Module.exports = router;