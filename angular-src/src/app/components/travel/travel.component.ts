import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArticlesService , iArticle} from "../../services/articles.service";
import { AuthService } from "../../services/auth.service";

// export interface iArticle {
//   articleTitle: String,
//   //articleTumbnail: String,
//   article: String
// }


export interface iArticleGroup {
  articleGroup: String, //Name of the group
  articles: iArticle[]
}

export interface iTimelineList {
  _id: String;
  articleGroups: iArticleGroup[],
}

@Component({
  selector: 'app-travel-site',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.less']
})
export class TravelComponent implements OnInit {

  //private articleGroups: iArticleGroup[];
  private timelineList: iTimelineList[];
  private renderedArticles: iArticle[];
  private timelineActiveStateArray: any[] = [];
  private selectedArticleGroup: String = "";
  private allArticles: iArticle[]= [];
  detailViewShown: boolean = false;
  private chosenArticle: iArticle;
  private articleToEdit: iArticle;
  

  constructor(
    private _articleService: ArticlesService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    //    this.articleGroups= []; //TODO: remove me when GET from backend
    this.timelineList = [];
    this.renderedArticles = [];
    // this.initArticles(); //TODO: remove me when GET from backend
    // this.initArticleGroups(); // TODO: Remove me when GET remove me when GET from backend
    // this.getArticleGroups();
    this.loadArticles();
    this.timelineActiveStateArray["initialKey"]=false;
  }

  editModalActive: boolean= false;

  private closeModal(){
    this.editModalActive = false;
  }

  private editArticle(e: Event, article: iArticle){
    e.stopPropagation();
    this.editModalActive= true;
    this.articleToEdit = article;
    console.log(this.articleToEdit);
  }

  private submitEdit(){
    console.log(this.articleToEdit);
    this._articleService.editArticle(this.articleToEdit)
  }

  /**
   * Gets called when choosing an article
   * @param article Chosen article the user selected
   */
  public showDetailView(article: iArticle){
    this.detailViewShown= true;
    this.chosenArticle = article;
  }

  /**
   * Gets called when the detail-view component triggers the 'closingDetailView' event
   */
  public closeDetailView(){
    this.detailViewShown= false;   
  }


  /**
   * Gets called when the request finished getting all articles and set the property value
   */
  public articlesLoaded() {
    if(this.timelineList != null && this.timelineList.length>0){      
      this.setAllArticles();
      console.log(this.timelineList);
      
    }
  }

  /**
   * gets all of the articles from the Group-section listed and pushes them into a single array
   */
  public setAllArticles(){
    this.timelineList.forEach((section)=>{
      section.articleGroups.forEach(articleGroup => {
        this.allArticles = this.allArticles.concat(articleGroup.articles);
      });
    });
    this.timelineYearSelected(this.timelineList[0]);
  //  this.allArticles.reverse();// Why exactly? doesnt array.concat push the elements in back?
  }


  public loadArticles() {
    this._articleService.getGroupedArticles().subscribe((articleResponseObject) => {
      this.timelineList = articleResponseObject.articles; 
      this.articlesLoaded();
    }, (err) => {
      console.log(err);
      return false;
    }
    );
  }
  /**
   * Applies the filter when a year is chosen in the Timeline
   * @param section selected section
   */
  public timelineYearSelected(section: iTimelineList) {
    this.renderedArticles = [];
    this.detailViewShown=false;
    let currentYear = (new Date()).getFullYear();
    
    if (section._id == currentYear.toString()) { //TODO: check for current year  // shows all articles if on top Navigation Node  "Now"
      this.renderedArticles = this.allArticles;
      this.setActiveFilterHeader(null);
    } else {
      section.articleGroups.forEach((articleGroup: iArticleGroup) => {
        this.renderedArticles = this.renderedArticles.concat(articleGroup.articles)
      });
      this.setActiveFilterHeader(section._id);
    }
    this.activateTimelineNode(section._id);
   // this.activateNode(section._id);
  }
  
    /**
   * Applies the filter for a specific articleGroup
   * @param articleGroup selected ArticleGroup
   */
  private articleGroupSelected(articleGroup: iArticleGroup) {
    this.detailViewShown=false;
    this.renderedArticles = [];
    this.renderedArticles = this.renderedArticles.concat(articleGroup.articles);
    this.activateTimelineNode(articleGroup.articleGroup);//articleGroup is actually the name for the group
    //this.activateNode(articleGroup.id);
    this.setActiveFilterHeader(articleGroup.articleGroup);   
  }

  private setActiveFilterHeader(header: String){
    if(header != null){
      this.selectedArticleGroup =" - " + header;
    }else{
      this.selectedArticleGroup = ""
    }
  }


  /**
   * Highlights the currently active Timeline Filter Node
   * @param id Not actual any ID but what is given here will be stored as a key in an a associative array. Put _id (as sectionYear) or articleGroup (e.g "CDT") in here
   */
  private activateTimelineNode(id: String){
    let key;
    for (key in this.timelineActiveStateArray) {
      this.timelineActiveStateArray[key] = false;
      if (key == id) {//key already exists
        this.timelineActiveStateArray[key] = true;
      }else{//key does not yet exist and has to be created
        this.timelineActiveStateArray[""+id] = true;
      }
    }
  }


  /**
   * Activates an entry of the Timeline. Section or Node
   * @param id id of the selected Node
   */
  // private activateNode(id: string) {
  //   let key;
  //   for (key in this.timelineActiveStateArray) {
  //     this.timelineActiveStateArray[key] = false;
  //     if (key == id) {
  //       this.timelineActiveStateArray[key] = true;
  //     }
  //   }
  // }




/** alles im [] --> nur ein item das beispiel Ist eine Section
 * { SECTION starts here
        "_id" : "2016",
        "articleGroups" : [
                                {
                                "articleGroup" : "Asia",
                                "articles" : [
                                {
                                        "articleTitle" : "1st month",
                                        "articleContent" : "I am its contente",
                                        "articleDate" : {
                                                "year" : "2016",
                                                "fullDate" : "05-05-2016"
                                        },
                                        "articleGroup" : "Asia"
                                },
                                {
                                        "articleTitle" : "2st month",
                                        "articleContent" : "I am its contente",
                                        "articleDate" : {
                                                "year" : "2016",
                                                "fullDate" : "05-06-2016"
                                        },
                                        "articleGroup" : "Asia"
                                },
                                {
                                        "articleTitle" : "3rd month",
                                        "articleContent" : "I am its contente",
                                        "articleDate" : {
                                                "year" : "2016",
                                                "fullDate" : "15-07-2016"
                                        },
                                        "articleGroup" : "Asia"
                                }
                        ]
                }
        ]
}
 * 
 * 
 */

















}
  /**
   * Will be replaced ba a call GET '/getArticleGroups'
   */
  // private getArticleGroups(){
  //     this.timelineList.push(
  //       {
  //       year: 2018,
  //       articleGroups: [this.articleGroups[0],this.articleGroups[1],this.articleGroups[2]],
  //       id: "0"
  //       },
  //       {
  //         year: 2017,
  //         articleGroups: [this.articleGroups[3],this.articleGroups[4]],
  //         id: "1"
  //       },
  //       {
  //         year: 2016,
  //         articleGroups: [this.articleGroups[5]],
  //         id: "2"
  //       }  
  //     )
  //     if(this.timelineList.length!= 0){
  //       this.timelineList[0].year= "Now"
  //     }

  //     this.timelineList.forEach((section)=>{
  //       this.timelineActiveStateArray[section.id]=false
  //     })
  // }



  // //TODO: Gets Remove when GETting from backend
  // initArticles(){
  //   this.articles.push( 
  //   {
  //     articleTitle: "Trip to CDT 1",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Now on CDT 2",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Almost done",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Trip to South Africa",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Trip to Scotland",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Trip to Poland",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Trip to Pyrenees",
  //     article: ""
  //   },
  //   {
  //     articleTitle: "Trip to Norway",
  //     article: ""
  //   })


  //   this.renderedArticles= this.articles;
  // }

  // //TODO: Gets removed when GETting from backend
  // initArticleGroups(){
  //   this.articleGroups.push({
  //     groupName: "CDT",
  //     groupYear: 2018,
  //     groupArticles:[this.articles[0],this.articles[1],this.articles[2]],
  //     id: "10"
  //   },
  //   {
  //     groupName: "South Africa",
  //     groupYear: 2018,
  //     groupArticles:[this.articles[3]],
  //     id: "11"
  //   },
  //   {
  //     groupName: "Scotland",
  //     groupYear: 2018,
  //     groupArticles:[this.articles[4]],
  //     id: "12"
  //   },
  //   {
  //     groupName: "Poland",
  //     groupYear: 2017,
  //     groupArticles:[this.articles[5]],
  //     id: "13"
  //   },
  //   {
  //     groupName: "Pyrenees",
  //     groupYear: 2017,
  //     groupArticles:[this.articles[6]],
  //     id: "14"
  //   },
  //   {
  //     groupName: "Norway",
  //     groupYear: 2016,
  //     groupArticles:[this.articles[7]],
  //     id: "15"
  //   }
  //   )
  //   this.articleGroups.forEach((articleGroup)=>{
  //     this.timelineActiveStateArray[articleGroup.id]=false;
  //   });
  // }





// {"_id" : "asd","articleTitle":"PostTrail","articleContent":"I am its contente","articleDate" : {"year" : "2018","fullDate" : "15-12-2018"},"group" : "CDTT"}

// {_id:"sad547er4w2v5x85b8", name:"Jhon", jobTime:600, floor:2, dept:5, age:25},

// {age:22, floors:[{floor:2,persons:[{name:"Anne",jobTime:280,dept:8}]}]},


// {year:2017, articleGroups:[{name:"cdt",articles:[{name:"Anne",jobTime:280,dept:8}]}]}



// db.articles.aggregate([  { "$group": {    "_id": {      "year": "$articleDate.year",      "articleGroup": "$group",    },    "articles": { "$push": {      "articleTitle": "$articleTitle",      "articleContent": "$articleContent",      "articleDate": "$articleDate",      "articleGroup": "$group"    }}  }},  { "$group": {    "_id": "$_id.year","articleGroups": { "$push": {"articleGroup": "$_id.articleGroup","articles": "$articles",}}}}]).pretty()

// [
//   { "$group": {
//     "_id": {
//       "age": "$age",
//       "floor": "$floor",
//     },
//     "persons": { "$push": {
//       "name": "$name",
//       "jobTime": "$jobTime",
//       "dept": "$dept"
//     }}
//   }},
//   { "$group": {
//     "_id": "$_id.age",
//     "floors": { "$push": {
//       "floor": "$_id.floor",
//       "persons": "$persons"
//     }}
//   }}
// ]

