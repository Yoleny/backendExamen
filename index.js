const express = require('express');
const Producto = require('./models/Producto');
const sequelize= require('./config/db');
const cors = require ('cors')

const app= express();
app.use(express.json());
var port = 5000;

app.use(cors())

//select categoryCode, avg(value) from producto group by categoryCode;

app.get('/totalCategoryCode', async(req,resp) =>{

    try {
        const result = await Producto.findAll({
            attributes:[
                'categoryCode',
                [sequelize.fn('avg', sequelize.col('value')), 'Total']
            ],
            group: ["categoryCode"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});




app.get('/totalBycategoryCode', async(req,resp) =>{

    try {
        const result = await Producto.findAll({
            attributes:[
                'categoryCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["categoryCode"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});


app.listen(port, ()=>{
    console.log('Servicio ejecutandose en :' , port)
})


app.get('/totalBybrandCode', async(req,resp) =>{

    try {
        const result = await Producto.findAll({
            attributes:[
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["brandCode"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

app.listen(port, ()=>{
    console.log('Servicio ejecutandose en :' , port)
})
