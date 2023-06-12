'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// require('dotenv').config();
// const PORT = process.env.PORT;

const stamper = require('./middleware/stamper')
const pageNotFound = require('./middleware/404')
const serverError = require('./middleware/500')

app.get('/',stamper,(req,res) => {
    res.status(200).json({
        code:200,
        message:'welcome to home page',
        time: req.stamper
    })
})

app.get('/bad', badRequest);
function badRequest(req, res, next) {
    req.body = {
      test: 'test'
    }
      next({message: 'Not a Number'})
  }

app.use(serverError);
app.get('*',pageNotFound)



function start(port){
    app.listen(port, () => console.log('Up and running on port : ', port))
}

module.exports={
    app,
    start
}
