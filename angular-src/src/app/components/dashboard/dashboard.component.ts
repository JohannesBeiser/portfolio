import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from "../../services/image-upload.service";
import { ArticlesService, iArticle, iDate } from "../../services/articles.service";
import { ThrowStmt } from '@angular/compiler';//TODO: where does this come from?
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  public chosenThumbnail;
  public chosenArticleTitle: string = "";
  public chosenArticleContent: String = "";
  public chosenArticleGroup: String = "";
  public chosenArticleDate: Date;

  constructor(
    private _imgUpload: ImageUploadService,
    private _articleService: ArticlesService
  ) { }

  ngOnInit() {
  }

  private submitPressed() {
    // this._imgUpload.uploadImage(this.chosenThumbnail);

    let parsedDate = new Date(this.chosenArticleDate)

    let dateObject: iDate = {
      year: parsedDate.getFullYear().toString(),
      fullDate: parsedDate.toDateString()
    }

    let newArticle = {
      articleTitle: this.chosenArticleTitle,
      articleContent: this.chosenArticleContent,
      articleDate: dateObject,
      group: this.chosenArticleGroup
    }
    this._articleService.addArticle(newArticle, this.chosenThumbnail);
  }


  private fileChanged(event) {
    this.chosenThumbnail = event.target.files[0]
    // var target: HTMLInputElement = event.target as HTMLInputElement;
    // for(var i=0;i < target.files.length; i++) {
    //     this._imgUpload.uploadImage(target.files[i]).subscribe((resObj)=>{
    //       console.log(resObj);        
    //     })
    // }  
  }

  //TODO: Deprecated?
  private upload(img: File) {
    var formData: FormData = new FormData();
    formData.append("image", img, img.name);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
      //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
    });
    xhr.open("PUT", "this/is/the/upload/address", true);
    xhr.send(formData);
  }



}
