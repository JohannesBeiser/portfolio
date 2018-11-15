import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ImageUploadService {

  constructor(private http: Http) { }


  public uploadImage(image){

    const fd = new FormData();
    fd.append('imageData', image, image.name)
    return this.http.post('/uploadFile',fd);

  }
}
