const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Article = require('../models/article');



router.post('/addArticle', (req,res,next)=>{    
    let newArticle = new Article({
        articleTitle: req.body.articleTitle,
        articleContent: req.body.articleContent,
        articleDate: req.body.articleDate,
        group: req.body.group
    });
    
    Article.addArticle(newArticle, (err, article) =>{
        if(err){
            res.json({success: false, msg: "Failed to add the Article"});
        }else{            
            res.json({success: true, msg: "Article added"});
        }
    });
});

router.get('/loadGroupedArticles', (req,res,next)=>{
    Article.getGroupedArticles((err, result)=>{
        if(err){
            res.json({success: false, msg: "Couldn't load Articles"})
        }else{
            res.json({success:true, msg:"Articles loaded", articles: result})
        }
    })
})

router
module.exports = router;
