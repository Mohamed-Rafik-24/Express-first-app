const express = require('express')
const router = express.Router()

const users = [
    {
        name: 'rafik',
        email: 'rafik@gmail.com',
        password: 'admin@123',
        role: 'student'
    },  
    {
        name: 'mohamed',
        email: 'mohamed@gmail.com',
        password: 'admin@123',
        role: 'student'
    },
    {
        name: 'ram',
        email: 'ram@gmail.com',
        password: 'admin@123',
        role: 'student'
    },
    {
        name: 'kaleesh',
        email: 'kaleesh@gmail.com',
        password: 'admin@123',
        role: 'student'
    }
]

// get request
router.get('/', (req, res)=>{
    res
    .status(200)
    .send({
        message: 'data fetched successfully',
        data:users
    })
})

// get request by id
router.get('/:id', (req, res)=>{
    if(Number(req.params.id)<users.length) {
    res
    .status(200)
    .send({
        message: 'user data fetched successfully',
        data:users[req.params.id]
    })
    }else {
        res
        .status(400)
        .send({
            message: 'User not found',

        })
    }
})

// post request
router.post('/', (req, res)=>{
    users.push(req.body)
    res
    .status(200)
    .send({
        message: "user saved successfully"
    })
})

// PUT Request
router.put("/:id", (req, res)=>{
    if(Number(req.params.id)<users.length) {
        users.splice(req.params.id,1,req.body)
        // users[req.params.id].name = req.body.name 
        res.status(200)
        .send({
            message: 'User data update or replace successfully',
            data:users[req.params.id]
        })
    }else {
        res
        .status(400)
        .send({
            message:'user data not update or replace'
        })
    }
})

// Delete Request:
router.delete("/:id", (req, res)=>{
    if(Number(req.params.id)<users.length) {
        users.splice(req.params.id,1)
        res.status(200)
        .send({
            message: 'User data deleted successfully',
        })
    }else {
        res
        .status(400)
        .send({
            message:'user data not deleted'
        })
    }
})


module.exports = router



