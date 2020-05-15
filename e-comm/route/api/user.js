const route=require('express').Router();
const user=require('../../db').user;
route.get('/',(req,res)=>
{
      user.findAll()
      .then((User)=>
      {
          res.status(200).send(User)
      })
      .catch((err)=>
      {
          res.status(500).send(
             { error:'could not retrieve users'}
          )
      })
})
route.post('/',(req,res)=>
{
    user.bulkCreate({
        name:req.body.name
    }).then((User)=>
    {
        res.status(201).send(User);
    }).catch((err)=>
    {
        res.status(501).send(
            {error:'could not add new user'}
        )
    })
})

exports=module.exports=route