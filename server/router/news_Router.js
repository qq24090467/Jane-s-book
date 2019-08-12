var express=require('express');
var router=express.Router();
var db = require('../mysql.js');

//查询新闻接口
router.post('/getNews',(request,response) =>{
    var begin = (request.body.page -1)*10;
    var sql = `SELECT * FROM news LIMIT ${ begin },10`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,newsList:result });
    })
})

//查询新闻数目接口
router.get('/getNewsCount',(request,response) => {
    var sql = `SELECT COUNT(*) FROM news`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,newsCount:result });
    })
})

//查询新闻详情
router.post('/getNewsDetails',(request,response) =>{
    var sql = `SELECT * FROM news WHERE newID = ${ request.body.newID }`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,newsList:result });
    })
})

//增加新闻阅读量
router.post('/addNewsRead',(request,response) =>{
    var sql = ` UPDATE news SET view = view + 1  WHERE newID = ${request.body.newID}`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,message:'阅读量增加' });
    })
})

// 查询10条最新发生的新闻
router.get('/getTenNews',(request,response) =>{
    var sql = `SELECT title,newID FROM news ORDER BY TIME DESC LIMIT 0,10`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,tenNews:result });
    })
})

//导出router
module.exports=router;