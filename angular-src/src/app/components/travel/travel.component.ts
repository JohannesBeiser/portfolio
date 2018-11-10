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

  renderedArticles: iArticle[];

  timelineList: iTimelineList[];
  timelineActiveStateArray: any[] = [];

  constructor() { }

  ngOnInit() {
    this.articles= [];
    this.articleGroups= [];
    this.timelineList = [];
    this.renderedArticles= [];
    this.initArticles();
    this.initArticleGroups();
    this.sortArticleGroups();
    console.log(this.timelineActiveStateArray);
  }


  public timelineYearSelected(section : iTimelineList){
    this.renderedArticles = [];

    if(section.year == "Now"){
      this.renderedArticles = this.articles;
    }else{
      section.articleGroups.forEach(articleGroup => {
        this.renderedArticles = this.renderedArticles.concat(articleGroup.groupArticles)
      });
    }
    this.activateNode(section.id);
   }

  articleGroupSelected(articleGroup: iArticleGroup){
    this.renderedArticles= [];
    this.renderedArticles= this.renderedArticles.concat(articleGroup.groupArticles);
    this.activateNode(articleGroup.id);
  }

  activateNode(id: string){
    let key;
    for(key in this.timelineActiveStateArray){
      this.timelineActiveStateArray[key]=false;
      if(key == id){
        this.timelineActiveStateArray[key]=true;
      }
    }
  }

  sortArticleGroups(){

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
      this.timelineList[0].year= "Now"

      this.timelineList.forEach((section)=>{
        this.timelineActiveStateArray[section.id]=false
      })
  }


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
