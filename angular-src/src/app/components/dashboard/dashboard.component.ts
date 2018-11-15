import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from "../../services/image-upload.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {


  public chosenPicture;

  constructor(private _imgUpload: ImageUploadService) { }

  ngOnInit() {
  }

  private submitPressed(){
    this._imgUpload.uploadImage(this.chosenPicture);
  }


  private fileChanged(event){
    this.chosenPicture = event.target.files[0]
    // var target: HTMLInputElement = event.target as HTMLInputElement;
    // for(var i=0;i < target.files.length; i++) {
    //     this._imgUpload.uploadImage(target.files[i]).subscribe((resObj)=>{
    //       console.log(resObj);        
    //     })
    // }  
  }

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
