/*
 * @Author: your name
 * @Date: 2020-09-27 01:36:16
 * @LastEditTime: 2020-10-30 01:20:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weapp-api/app.js
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

const toonifyRoute = require('./api/routes/toonify')
const sayHelloRoute = require('./api/routes/sayHello')
app.use('/toonifyImage', toonifyRoute)
app.use('/sayHello', sayHelloRoute)

app.use('/index', (req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
    
});

module.exports = app;