const sequelise=require('sequelize');
const db=new sequelise('shopping','shopper','shoppass',
{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
})
const user=db.define('users',{
    id:{
        type:sequelise.INTEGER,
        autoIncreament:true,
        primaryKey:true
    },
    name:
    {
        type:sequelise.STRING,
        allowNull:false
    }
})
const product=db.define('products',{
    id:{
        type:sequelise.INTEGER,
        autoIncreament:true,
        primaryKey:true
    },
    name:{
        type:sequelise.STRING,
        allowNull:false
    },
    manufacturer:{
        type:sequelise.STRING,
    },
    price:{
        type:sequelise.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})
db.sync().then(()=>console.log('database created')).catch((err)=>console.error(err))
exports=module.exports={ user,product}