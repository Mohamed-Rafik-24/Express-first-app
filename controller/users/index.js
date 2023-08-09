const data = [
    {
        name: 'rafik'
    },
    {
        name: 'mohamed'
    },
    {
        name: 'ram'
    },
    {
        name: 'kaleesh'
    }
]

exports.getUser = function (req,res){
   res.send({
    message:'sample endpoint to demonstrate MVC',
    data
   })
}