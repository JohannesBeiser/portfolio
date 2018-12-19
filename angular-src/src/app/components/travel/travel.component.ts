import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArticlesService, iArticle, iDate } from "../../services/articles.service";
import { AuthService } from "../../services/auth.service";
import { DateHelper } from "../../helperClasses/validation";
import { runInThisContext } from 'vm';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'


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
  public timelineList: iTimelineList[];
  private renderedArticles: iArticle[];
  private timelineActiveStateArray: any[] = [];
  private selectedArticleGroup: String = "";
  private allArticles: iArticle[] = [];
  public detailViewShown: boolean = false;
  public chosenArticle: iArticle;

  public fileReader: FileReader;

  private currentYear = new Date().getFullYear().toString();

  public articleToEdit: iArticle;
  private articleEditDateRaw: any;

  constructor(
    private _articleService: ArticlesService,
    private _authService: AuthService,
    private DateHelper: DateHelper,
    private sanitized: DomSanitizer
  ) { }

  ngOnInit() {
    //    this.articleGroups= []; //TODO: remove me when GET from backend
    this.timelineList = [];
    this.renderedArticles = [];
    // this.initArticles(); //TODO: remove me when GET from backend
    // this.initArticleGroups(); // TODO: Remove me when GET remove me when GET from backend
    // this.getArticleGroups();
    this.loadArticles();
    this.timelineActiveStateArray["initialKey"] = false;

    this.fileReader  = new FileReader();
    this.fileReader.addEventListener("load", ()=> {
      this.articleToEdit.thumbnailUrl = this.fileReader.result.toString();      
    }, false);
  }

  /**
   * Sorts the timeline list ranked latest first article groups and articles insite each section
   * TODO Put this into article Service
   */
  private sortTimelineList() {
    for (var l = 0; l < this.timelineList.length; l++) {
      let yearSection: iTimelineList = this.timelineList[l];
      // _id, articleGroups[]

      //Sort articles of all groups within a section
      for (let k = 0; k < yearSection.articleGroups.length; k++) {
        let articleGroup = yearSection.articleGroups[k];

        let tempSortedArticlesArray: iArticle[] = [];
        //sorts the articles within a single group 
        for (let j = 0; j < articleGroup.articles.length; j++) {
          // articleGroup (name) , articles []
          let articleToSort = articleGroup.articles[j];

          //additionally also modify its content to safehtml
          articleToSort.articleContent = this.transformToSaveHtml(articleToSort.articleContent);

          //inititlize array for first element
          if (tempSortedArticlesArray.length == 0) {
            tempSortedArticlesArray.push(articleToSort);
          } else {
            //Sort the actual article into right place
            for (let i = 0; i < tempSortedArticlesArray.length; i++) {
              let sortedArticle = tempSortedArticlesArray[i];

              let articleToSortDate = new Date(articleToSort.articleDate.fullDate.toString());
              let sortedArticleDate = new Date(sortedArticle.articleDate.fullDate.toString());

              //Insert at index if date newer than element
              if (articleToSortDate > sortedArticleDate) {
                tempSortedArticlesArray.splice(i, 0, articleToSort);
                break;
              } else if (i == tempSortedArticlesArray.length - 1) {
                tempSortedArticlesArray.push(articleToSort);//must be oldest if couldt splice in before
                break;
              }
            }
          }
        }
        //Now all the articles are sorted within one group
        //--> assign sorted to origin
        articleGroup.articles = tempSortedArticlesArray;
      }
      //now the articles inside the articlegroups are sorted
      //each [0] element is the latest
      let tempArticleGroupArr: iArticleGroup[] = [];
      //go through the groups to re-arrange them
      for (let i = 0; i < yearSection.articleGroups.length; i++) {
        let articleGroup = yearSection.articleGroups[i];
        if (tempArticleGroupArr.length == 0) {
          tempArticleGroupArr.push(articleGroup)
        } else {
          //Go through the already sorted arr to sort in the new group
          for (let j = 0; j < tempArticleGroupArr.length; j++) {
            let sortedArticleGroup = tempArticleGroupArr[j];
            let groupToSortDate = new Date(articleGroup.articles[0].articleDate.fullDate.toString());
            let sortedGroupDate = new Date(sortedArticleGroup.articles[0].articleDate.fullDate.toString());
            if (groupToSortDate > sortedGroupDate) {
              tempArticleGroupArr.splice(j, 0, articleGroup);
              break;
            } else if (j == tempArticleGroupArr.length - 1) { //if searched the whole sorted array but still cant find a newer spot, it must be the oldest and gets pushed to the end
              tempArticleGroupArr.push(articleGroup);
              break;
            }
          }
        }
      }
      yearSection.articleGroups = tempArticleGroupArr;
    }
    this.setAllArticles();
  }

  private getFormattedDate(date: string): string {
    return this.DateHelper.getSimplifiedDate(new Date(date))
  }


  editModalActive: boolean = false;

  private closeModal() {
    this.editModalActive = false;
  }

  private editArticle(e: Event, article: iArticle) {
    e.stopPropagation();
    this.articleToEdit = article;

    let safehtml: SafeHtml = article.articleContent    
    this.articleEditDateRaw = this.DateHelper.formatDate(article.articleDate.fullDate);//new Date(Date.parse(article.articleDate.fullDate.toString()));    
    this.editModalActive = true;
  }

  private submitEdit() {
    let parsedDate = new Date(Date.parse(this.articleEditDateRaw));
    this.articleToEdit.articleDate = this.DateHelper.getIDateFromDate(parsedDate);
    this._articleService.editArticle(this.articleToEdit);
    this.closeModal()
  }

  private deleteArticle() {
    if (confirm("Do you really want to delete the article " + this.articleToEdit.articleTitle) == true) {
      this._articleService.deleteArticle(this.articleToEdit)
    }

    this.closeModal();
  }

  /**
   * Gets called when choosing an article
   * @param article Chosen article the user selected
   */
  public showDetailView(article: iArticle) {
    this.detailViewShown = true;
    this.chosenArticle= article;
  }

  private transformToSaveHtml(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

  /**
   * Gets called when the detail-view component triggers the 'closingDetailView' event
   */
  public closeDetailView() {
    this.detailViewShown = false;
  }

  private fileChanged(event) {
    let chosenThumbnail = event.target.files[0]
    this.fileReader.readAsDataURL(chosenThumbnail);

    // var target: HTMLInputElement = event.target as HTMLInputElement;
    // for(var i=0;i < target.files.length; i++) {
    //     this._imgUpload.uploadImage(target.files[i]).subscribe((resObj)=>{
    //       console.log(resObj);        
    //     })
    // }  
  }
  /**
   * Gets called when the request finished getting all articles and the property TimelineList is set.
   */
  public articlesLoaded() {
    if (this.timelineList != null && this.timelineList.length > 0) {
      this.sortTimelineList();      
    }
  }

  /**
   * gets all of the articles from the Group-section listed and pushes them into a single array
   */
  public setAllArticles() {
    this.timelineList.forEach((section) => {
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
    this.detailViewShown = false;
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
    this.detailViewShown = false;
    this.renderedArticles = [];
    this.renderedArticles = this.renderedArticles.concat(articleGroup.articles);
    this.activateTimelineNode(articleGroup.articleGroup);//articleGroup is actually the name for the group
    //this.activateNode(articleGroup.id);
    this.setActiveFilterHeader(articleGroup.articleGroup);
  }

  private setActiveFilterHeader(header: String) {
    if (header != null) {
      this.selectedArticleGroup = header;
    } else {
      this.selectedArticleGroup = ""
    }
  }


  /**
   * Highlights the currently active Timeline Filter Node
   * @param id Not actual any ID but what is given here will be stored as a key in an a associative array. Put _id (as sectionYear) or articleGroup (e.g "CDT") in here
   */
  private activateTimelineNode(id: String) {
    let key;
    for (key in this.timelineActiveStateArray) {
      this.timelineActiveStateArray[key] = false;
      if (key == id) {//key already exists
        this.timelineActiveStateArray[key] = true;
      } else {//key does not yet exist and has to be created
        this.timelineActiveStateArray["" + id] = true;
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

