const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Article = require('../models/article');



router.post('/addArticle', (req,res,next)=>{    
    let newArticle = new Article({
        articleTitle: req.body.articleTitle,
        articleContent: req.body.articleContent,
        articleDate: req.body.articleDate,
        group: req.body.group,
        thumbnailURL: req.body.thumbnailURL
    });
    console.log(newArticle);
    
    Article.addArticle(newArticle, (err, article) =>{
        if(err){
            res.json({success: false, msg: "Failed to add the Article"});
        }else{            
            res.json({success: true, msg: "Article added"});
        }
    });
});


/**
 * TODO:
 * build request in service with upodated article structure in mind
 * maybe change structure tzo how it actually looks like article.date.fullyear instead of flat
 * 
 */
router.post('/editArticle', (req, res, next)=>{
    Article.editArticle(req.body.id, req.body.updatedArticle, (err, result)=>{
        if(err){
            res.json({success: false, err: err})
        }else{
            res.json({success: true, msg: "successfully edited article"});
        }
    })
})


router.post('/deleteArticle', (req,res, next)=>{
    console.log("deleting:");
    
    console.log( req.body.id);
    
    Article.deleteArticle(req.body.id, (err, result)=>{
        if(err){
            res.send({success: false, msg: "Couldn't delete Article", err: err});
        }else{
            res.send({success: true, msg: "Delete sccessful "});
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
