const route=require('express').Router()
const product=require('../../db').product
route.get('/',(req,res)=>
{
    product.findAll()
    .then((Product)=>
    {
        res.status(200).send(Product)
    }).catch((err)=>
    {
        res.status(500).send(
            {
                error:'could not retrieve product'
            }
        )
    })
})
route.post('/',(req,res)=>
{
    if(isNaN(req.body.price))
    {
        return res.status(403).send({
            error:'Price is not a valid number'
        })
    }
       product.bulkCreate({
           name:req.body.name,
           manufacturer:req.body.manufacturer,
           price:parseFloat(req.body.price)
       }).then((Product)=>
       {
           res.status(201).send(Product);
       }).catch((err)=>
       {
           res.status(501).send({
               error:'could not add new product'
           })
       })
})
exports=module.exports=route
