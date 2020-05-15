const route=require('express').Router();
route.use('/user',require('./user'));
route.use('/product',require('./product'));
exports=module.exports=
{route}