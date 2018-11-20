import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
// import { iArticle } from '../travel.component';
import { iArticle } from "../../../services/articles.service";
import { DateHelper } from "../../../helperClasses/validation";

@Component({
  selector: 'article-detail-view',
  templateUrl: './article-detail-view.component.html',
  styleUrls: ['./article-detail-view.component.less']
})
export class ArticleDetailViewComponent implements OnInit {
  @Input() article: iArticle;
  @Output() detailViewClosing = new EventEmitter();

  constructor(
    private _dateHelper: DateHelper
  ) { }
  

  ngOnInit() {
  }

  private closeDetailView(){
    this.detailViewClosing.next();
  }

  public getFormattedDate(date: string){
    return this._dateHelper.getSimplifiedDate(new Date(date));
  }
}
