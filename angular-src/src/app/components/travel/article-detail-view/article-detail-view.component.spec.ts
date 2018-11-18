import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailViewComponent } from './article-detail-view.component';

describe('ArticleDetailViewComponent', () => {
  let component: ArticleDetailViewComponent;
  let fixture: ComponentFixture<ArticleDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
