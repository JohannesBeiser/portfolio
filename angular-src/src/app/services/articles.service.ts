import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ImageUploadService } from "./image-upload.service";
import { SafeHtml } from '@angular/platform-browser';

export interface iDate {
  fullDate: String,
  year: String
}

export interface iArticle {
  articleTitle: String,
  articleContent: String | SafeHtml,
  articleDate: iDate,
  group: String,
  thumbnailUrl: String,
  id?: any
}


@Injectable()
export class ArticlesService {

  constructor(
    private http: Http,
    private _imgService: ImageUploadService
  ) { }

  public addArticle(article) {

    let newArticle: iArticle = {
      articleTitle: article.articleTitle,
      articleContent: article.articleContent,
      articleDate: article.articleDate,
      group: article.group,
      thumbnailUrl: article.thumbnail
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('articles/addArticle', newArticle, { headers: headers }).subscribe(answer => {
      console.log(answer);
    })

  }

  public editArticle(updatedArticle: iArticle) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = updatedArticle.id;
    this.http.post('/articles/editArticle', { id: id, updatedArticle: updatedArticle }, { headers: headers }).subscribe(answer => {
      console.log(answer);
    });

  }

  public deleteArticle(article: iArticle) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = article.id;
    this.http.post('/articles/deleteArticle', { id: id }, { headers: headers }).subscribe(answer => {
      console.log(answer);
    });
  }

  public getGroupedArticles() {
    return this.http.get('articles/loadGroupedArticles').map(res => res.json());
  }
}
