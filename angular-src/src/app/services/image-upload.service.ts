import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ImageUploadService {

  constructor(private http: Http) { }


  public uploadImage(image){

    const fd = new FormData();
    fd.append('imageData', image, image.name)
    console.log("Formdata is: ");

    this.http.post('/uploadFile',fd).subscribe(res=>{
      console.log(res);      
    })   
  }
}
