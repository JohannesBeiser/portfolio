import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
// import { iArticle } from '../travel.component';
import { iArticle } from "../../../services/articles.service";


@Component({
  selector: 'article-detail-view',
  templateUrl: './article-detail-view.component.html',
  styleUrls: ['./article-detail-view.component.less']
})
export class ArticleDetailViewComponent implements OnInit {
  @Input() article: iArticle;
  @Output() detailViewClosing = new EventEmitter();

  constructor(

  ) { }
  

  ngOnInit() {
  }

  private closeDetailView(){
    this.detailViewClosing.next();
  }
}
