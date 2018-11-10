import { Component, OnInit } from '@angular/core';



export interface iArticle{
    articleTitle: String,
    //articleTumbnail: String,
    article: String,
    isShown: boolean,
    id: Number
}

export interface iArticleGroup{
  groupName: String,
  groupYear: Number,
  groupArticles: iArticle[]
}

export interface iTimelineList{
  year: Number;
  articleGroups: iArticleGroup[]
}

@Component({
  selector: 'app-travel-site',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.less']
})
export class TravelComponent implements OnInit {

  articleGroups: iArticleGroup[];
  articles: iArticle[];
  timelineList: iTimelineList[];

  constructor() { }

  ngOnInit() {
    this.articles= [];
    this.articleGroups= [];
    this.timelineList = [];
    this.initArticles();
    this.initArticleGroups();
    this.sortArticleGroups();
    this.showArticles(true);
  }


  public timelineYearSelected(section){

    console.log(section)
    
  }

  sortArticleGroups(){

      this.timelineList.push(
        {
        year: 2018,
        articleGroups: [this.articleGroups[0],this.articleGroups[1],this.articleGroups[2]]
        },
        {
          year: 2017,
          articleGroups: [this.articleGroups[3],this.articleGroups[4]]
        },
        {
          year: 2016,
          articleGroups: [this.articleGroups[5]]
        }  
      )
  }

/**
 * 
 * @param ids ids of the articles that should be shown. Set to true to show all, false to hide all
 */
  showArticles(ids: Number[] | boolean){
    if(typeof ids == 'boolean'){
      if(ids==true){
        this.articles.forEach((article)=>{
          article.isShown=true;
        });
      }else{
        this.articles.forEach((article)=>{
          article.isShown=false;
        });
      }
    }else{

      //Hides all articles
      this.articles.forEach((article)=>{
        article.isShown=false;
      });
  
      //shows wanted articles
      this.articles.forEach((article)=>{
        ids.forEach((id)=>{
          if(article.id==id){
            article.isShown=true;
          }
        })        
      });
    }
    
  }

  initArticles(){
    this.articles.push( 
    {
      articleTitle: "Trip to CDT 1",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Now on CDT 2",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Almost done",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Trip to South Africa",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Trip to Scotland",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Trip to Poland",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Trip to Pyrenees",
      article: "",
      isShown: true,
      id: 0
    },
    {
      articleTitle: "Trip to Norway",
      article: "",
      isShown: true,
      id: 0
    })
  }

  initArticleGroups(){
    this.articleGroups.push({
      groupName: "CDT",
      groupYear: 2018,
      groupArticles:[this.articles[0],this.articles[1],this.articles[2]]
    },
    {
      groupName: "South Africa",
      groupYear: 2018,
      groupArticles:[this.articles[3]]
    },
    {
      groupName: "Scotland",
      groupYear: 2018,
      groupArticles:[this.articles[4]]
    },
    {
      groupName: "Poland",
      groupYear: 2017,
      groupArticles:[this.articles[5]]
    },
    {
      groupName: "Pyrenees",
      groupYear: 2017,
      groupArticles:[this.articles[6]]
    },
    {
      groupName: "Norway",
      groupYear: 2016,
      groupArticles:[this.articles[7]]
    }
    )
  }

}
