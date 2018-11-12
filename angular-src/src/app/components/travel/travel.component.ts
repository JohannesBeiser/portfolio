import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


export interface iArticle{
    articleTitle: String,
    //articleTumbnail: String,
    article: String
}

export interface iArticleGroup{
  groupName: String,
  groupYear: Number,
  groupArticles: iArticle[],
  id: string
}

export interface iTimelineList{
  year: Number | String;
  articleGroups: iArticleGroup[],
  id: string
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
  renderedArticles: iArticle[];
  timelineActiveStateArray: any[] = [];

  constructor() { }

  ngOnInit() {
    this.articles= []; //TODO: remove me when GET from backend
    this.articleGroups= []; //TODO: remove me when GET from backend
    this.timelineList = [];
    this.renderedArticles= [];
    this.initArticles(); //TODO: remove me when GET from backend
    this.initArticleGroups(); // TODO: Remove me when GET remove me when GET from backend
    this.getArticleGroups();
  }

  /**
   * Applies the filter when a year is chosen in the Timeline
   * @param section selected section
   */
  public timelineYearSelected(section : iTimelineList){
    this.renderedArticles = [];

    if(section.year == "Now"){// shows all articles if on top Navigation Node  "Now"
      this.renderedArticles = this.articles;
    }else{
      section.articleGroups.forEach(articleGroup => {
        this.renderedArticles = this.renderedArticles.concat(articleGroup.groupArticles)
      });
    }
    this.activateNode(section.id);
   }

   /**
    * Applies the filter for a specific articleGroup
    * @param articleGroup selected ArticleGroup
    */
  private articleGroupSelected(articleGroup: iArticleGroup){
    this.renderedArticles= [];
    this.renderedArticles= this.renderedArticles.concat(articleGroup.groupArticles);
    this.activateNode(articleGroup.id);
  }

  /**
   * Activates an entry of the Timeline. Section or Node
   * @param id id of the selected Node
   */
  private activateNode(id: string){
    let key;
    for(key in this.timelineActiveStateArray){
      this.timelineActiveStateArray[key]=false;
      if(key == id){
        this.timelineActiveStateArray[key]=true;
      }
    }
  }

  /**
   * Will be replaced ba a call GET '/getArticleGroups'
   */
  private getArticleGroups(){
      this.timelineList.push(
        {
        year: 2018,
        articleGroups: [this.articleGroups[0],this.articleGroups[1],this.articleGroups[2]],
        id: "0"
        },
        {
          year: 2017,
          articleGroups: [this.articleGroups[3],this.articleGroups[4]],
          id: "1"
        },
        {
          year: 2016,
          articleGroups: [this.articleGroups[5]],
          id: "2"
        }  
      )
      if(this.timelineList.length!= 0){
        this.timelineList[0].year= "Now"
      }

      this.timelineList.forEach((section)=>{
        this.timelineActiveStateArray[section.id]=false
      })
  }



  //TODO: Gets Remove when GETting from backend
  initArticles(){
    this.articles.push( 
    {
      articleTitle: "Trip to CDT 1",
      article: ""
    },
    {
      articleTitle: "Now on CDT 2",
      article: ""
    },
    {
      articleTitle: "Almost done",
      article: ""
    },
    {
      articleTitle: "Trip to South Africa",
      article: ""
    },
    {
      articleTitle: "Trip to Scotland",
      article: ""
    },
    {
      articleTitle: "Trip to Poland",
      article: ""
    },
    {
      articleTitle: "Trip to Pyrenees",
      article: ""
    },
    {
      articleTitle: "Trip to Norway",
      article: ""
    })

   
    this.renderedArticles= this.articles;
  }

  //TODO: Gets removed when GETting from backend
  initArticleGroups(){
    this.articleGroups.push({
      groupName: "CDT",
      groupYear: 2018,
      groupArticles:[this.articles[0],this.articles[1],this.articles[2]],
      id: "10"
    },
    {
      groupName: "South Africa",
      groupYear: 2018,
      groupArticles:[this.articles[3]],
      id: "11"
    },
    {
      groupName: "Scotland",
      groupYear: 2018,
      groupArticles:[this.articles[4]],
      id: "12"
    },
    {
      groupName: "Poland",
      groupYear: 2017,
      groupArticles:[this.articles[5]],
      id: "13"
    },
    {
      groupName: "Pyrenees",
      groupYear: 2017,
      groupArticles:[this.articles[6]],
      id: "14"
    },
    {
      groupName: "Norway",
      groupYear: 2016,
      groupArticles:[this.articles[7]],
      id: "15"
    }
    )
    this.articleGroups.forEach((articleGroup)=>{
      this.timelineActiveStateArray[articleGroup.id]=false;
    });
  }

}
