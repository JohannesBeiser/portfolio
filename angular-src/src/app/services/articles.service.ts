import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ImageUploadService } from "./image-upload.service";

export interface iDate{
  fullDate: String,
  year: String
}

export interface iArticle{
  articleTitle:String,
  articleContent:String,
  articleDate: iDate,
  group: String,
  thumbnailURL: String,
  id?: any
}


@Injectable()
export class ArticlesService {

  constructor(
    private http: Http,
    private _imgService: ImageUploadService
    ) { }

  public addArticle(article, thumbnail) {

    this._imgService.uploadImage(thumbnail).subscribe(((res: any) => {
      let uploadData = JSON.parse(res._body)
      
      let myThumbnailURL = "uploads/" + uploadData.file.filename; // concat instead of take finished '//' escaped string
      //TO this after thumbnail is uploaded
      let newArticle: iArticle = {
        articleTitle: article.articleTitle,
        articleContent: article.articleContent,
        articleDate: article.articleDate,
        group: article.group,
        thumbnailURL: myThumbnailURL
      }
      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('articles/addArticle', newArticle, { headers: headers }).subscribe(answer=>{
        console.log(answer);    
      })

    }));
  }

  public editArticle(updatedArticle: iArticle){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id= updatedArticle.id;
    this.http.post('/articles/editArticle', {id:id, updatedArticle:updatedArticle}, {headers:headers}).subscribe(answer=>{
      console.log("article added? : ");
      
      console.log(answer);
    });

  }

  public getGroupedArticles(){
    return this.http.get('articles/loadGroupedArticles').map(res => res.json());
  }
}
