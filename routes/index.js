const express = require('express')
const router = express.Router()
const {getUser} = require('../controller/users/index')



router.get('/', getUser)

module.exports = router




// const express = require('express')
// const router = express.Router()

// router.get('/', (req,res)=>{
//     res.send('<h1> Welcome to express</h1>')
// })

// router.post('/', (req,res)=>{
//     console.log(req.body)
//     res.send({
//     message: 'Data saved successfully'
//     })
// })

// module.exports = router