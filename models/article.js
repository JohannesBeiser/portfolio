const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema



const ArticleSchema = mongoose.Schema ({
  articleTitle: {
    type: String
  },
  articleContent: {
    type: String,
    required: true
  },
  articleDate: {
    type: JSON,
    required: true
  },
  group: { // Refers to the ArticleGroup Name/ID
    type: String,
    required: true
  },
  thumbnailURL: {
    type: String,
    required: true
  }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

module.exports.editArticle=function(id, updatedArticle, callback){
  Article.update(
    { _id: id},
    {$set: {
      'articleTitle' : updatedArticle.title,
      'articleContent' : updatedArticle.content,
     /* 'articleDate.fullDate' : updatedArticle.date.fullDate,
      'articleDate.year': updatedArticle.date.year,*/
      'group' : updatedArticle.group }
    },callback
  )
}


module.exports.addArticle = function(newArticle, callback) {
    newArticle.save(callback);
}

module.exports.getGroupedArticles = function(callback){
    // return with the right query
    Article.aggregate(
      [
        {
         "$group":{
           "_id": {
             "year": "$articleDate.year",
             "articleGroup": "$group",
            },
            "articles": {
              "$push": {
                "id": "$_id",
                "articleTitle": "$articleTitle",
                "articleContent": "$articleContent",
                "articleDate": "$articleDate",
                "articleGroup": "$group",
                "thumbnailURL": "$thumbnailURL"
              }
            }
          }
        },
        { 
          "$group": {
          "_id": "$_id.year",
          "articleGroups": {
            "$push": {
              "articleGroup": "$_id.articleGroup",
              "articles": "$articles"
            }
          }
        }
      },
      {
        $sort: {_id: -1}
      }
    ],callback)
  }
   //db.articles.aggregate([{$group:{_id:"$articleDate.year",articleGroups:{$push: "$$ROOT"}}}],callback).pretty()


  // db.articles.aggregate([{$group : {_id: "$articleDate.year", articles: {$push: "$$ROOT"}}}]).pretty()
  // db.articles.aggregate([{$group : {_id: "$group", articles: {$push: "$$ROOT"}}}]).pretty()

  //db.articles.aggregate([{$group: {_id:{articleGroups: "$group",yearGroup: "$articleDate.year"},articles: {$push: "$$ROOT"}},$group: {_id: {yearGroup: "$_id.yearGroup"},articleGroups: {$push: {articleGroups: "$_id.articleGroups",articles: "$articles"}}}}])
    

/*
    //position in age     age= yearGroup position = articleGroup
  { 
    $group: { // each position and age group have an array of jerseys
      _id:   { articleGroup: "$group", yearGroup: "$articleDate.year" },  //innere
      yearGroup: { $push: "$$ROOT" } 
    } 
  }, 
  { 
    $group: { // for each age group, create an array of positions
      _id: { yearGroup: "$_id.yearGroup" }, 
      articleGroup: { $push: { articleGroup: "$_id.articleGroup", yearGroup:"$group" } } 
    } 
  } 


}

{
  _id: "Minor Peewee",
  positions: array[]
}
//in positions array...
{
  _id: "Defence",
  jerseys: array[]
}


im articleGroups(positions) ist jerseys(articles--> wird gegeben von group ())


Jerseys.aggregate([
  {
    $group: { // each position and age group have an array of jerseys
      _id: {
        yearGroup: "$articleDate.year",
        articleGroup: "$group"
      },
      articles: {
        $push: "$$ROOT"
      }
    }
  },
  {
    $group: { // for each age group, create an array of positions
      _id: {
        articleGroup: "$_id.articleGroup"
      },
      articleGroups: {
        $push: {
          yearGroup: "$_id.yearGroup",
          articleGroup: "$group"
        }
      }
    }
  }
]);*/

