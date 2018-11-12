const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Article = require('../models/article');



router.post('/addArticle', (req,res,next)=>{
    console.log("willAddArticle");
    
    let newArticle = new Article({
        articleTitle: req.body.articleTitle,
        articleContent: req.body.articleContent,
        articleDate: req.body.articleDate,
        group: req.body.group
    });
    console.log("article created");
    
    Article.addArticle(newArticle, (err, article) =>{
        if(err){
            console.log("article NOT ADDDED !!");

            res.json({success: false, msg: "Failed to add the Article"});
        }else{
            console.log("articleAdded Success!!");
            
            res.json({success: true, msg: "Article added"});
        }
    });
});

module.exports = router;
