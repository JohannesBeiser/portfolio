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
  }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.addArticle = function(newArticle, callback) {
    newArticle.save(callback);
}

module.exports.getGroupedArticles = function(callback){
    // return with the right query
    let query
    Article.aggregate(
      [ { $group : { _id : "$item" } } ]
    )
    

   //db.articles.aggregate([{$group:{_id:"$articleDate.year",articleGroups:{$push: "$$ROOT"}}}],callback).pretty()


  // db.articles.aggregate([{$group : {_id: "$articleDate.year", articles: {$push: "$$ROOT"}}}]).pretty()
  // db.articles.aggregate([{$group : {_id: "$group", articles: {$push: "$$ROOT"}}}]).pretty()

  //db.articles.aggregate([{$group: {_id:{articleGroups: "$group",yearGroup: "$articleDate.year"},articles: {$push: "$$ROOT"}},$group: {_id: {yearGroup: "$_id.yearGroup"},articleGroups: {$push: {articleGroups: "$_id.articleGroups",articles: "$articles"}}}}])
    }

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


