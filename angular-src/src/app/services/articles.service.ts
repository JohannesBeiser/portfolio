import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

export interface iDate{
  fullDate: String,
  year: String
}

export interface iArticle{
  articleTitle:String,
  articleContent:String,
  articleDate: iDate,
  group: String,
}


@Injectable()
export class ArticlesService {


  constructor(private http: Http) { }


  public addArticle(article: iArticle) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('articles/addArticle', article, {headers: headers})
      .map(res => res.json());
  }
}
