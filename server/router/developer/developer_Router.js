var express=require('express');
var router=express.Router();
var db = require('../../mysql.js');

// 查询developer
router.get('/getDeveloper',(request,response)=>{
    var sql = `SELECT * FROM developer `;
    db(sql,(result)=>{
        response.status(200).json(result);
    })
})

//导出router
module.exports=router;