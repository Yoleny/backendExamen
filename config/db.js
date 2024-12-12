const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('empleados','root','Salmeron28',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;

