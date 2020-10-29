/*
 * @Author: your name
 * @Date: 2020-10-30 00:37:19
 * @LastEditTime: 2020-10-30 00:39:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /weapp-api/api/routes/sayHello.js
 */
const express = require('express')
const router = express.Router()
const { Router } = require('express');
router.get('/', (req, res, next )=> {
  res.status(200).json({
    text: "Hello"
  })
})

module.exports = router;