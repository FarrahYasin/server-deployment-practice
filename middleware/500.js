'use strict';
//for bad request
module.exports = (error,req,res, next)=>{
res.status(500).json({
    code:500,
    route:req.originalUrl,
    query:req.query,
    body:req.body,
    message:`SERVER ERROR: ${error.message}`
})
// console.log(res.originalUrl)
}