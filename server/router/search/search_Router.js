var express=require('express');
var router=express.Router();
var db = require('../../mysql.js');

// 搜索步行街帖子
router.get('/searchForStreet',(request,response)=>{
    var sql = `SELECT street.topic,street.time,user.nickName,street.streetID
    FROM street,USER
    WHERE street.topic LIKE '%${request.query.content}%'
    AND user.userID = street.userID`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,street:result});
    })
})

// 搜索相簿
router.get('/searchForPhoto',(request,response)=>{
    var sql = `SELECT photo.photoID,photo.src,user.nickName,photo.title
    FROM photo,USER
    WHERE photo.title LIKE '%${request.query.content}%'
    AND user.userID = photo.userID`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,photo:result});
    })
})

// 搜索用户
router.get('/searchForUser',(request,response)=>{
    var sql = `SELECT userID,nickName,avatar,email,birthday,level,gender,sign
    FROM USER
    WHERE nickName LIKE '%${request.query.content}%'`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,user:result});
    })
})

// 搜索新闻
router.get('/searchForNews',(request,response)=>{
    var sql = `SELECT title,TIME,newID,source
    FROM news
    WHERE title LIKE '%${request.query.content}%'`;
    db(sql,(result)=>{
        response.status(200).json({ code:200,news:result});
    })
})

//导出router
module.exports=router;