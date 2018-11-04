import { Component, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";

export interface iPictureObject{
  path: String;
  description: String;
  animationDelay: String;
}


@Component({
  selector: 'app-photography-site',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.less']
})


export class PhotographyComponent implements OnInit {

  pictures: iPictureObject[];
  pseudoElements:Number[];
  isInMobile: boolean;

  constructor(private _modalService: ModalService) { }

  ngOnInit() {
    this.buildPicturesArray();
    this.pseudoElements= [1,2]; // Adds 2 empty pseudo elements to fill flex design for last row

    this.initializeIsInMobile();

    window.onresize = () => {//maybe leave this out and be alright with the initial calculation-->may less performance
      this.initializeIsInMobile();
    }

  }

  private initializeIsInMobile(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    if(x<=768){
      this.isInMobile = true;
    }else{
      this.isInMobile = false;
    }
  }

  private showPicture(picture: iPictureObject){
    if(!this.isInMobile){
      this._modalService.showModal(picture)
    }
  }

  private buildPicturesArray(){
    this.pictures = [];
  
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (1) + ".jpg",
      'description': "Laos - Luang Prabang",
      'animationDelay' : "delay-100ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (3) + ".jpg",
      'description': "Norway - Jotunheimen",
      'animationDelay' : "delay-300ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (2) + ".jpg",
      'description': "Japan - Tokyo",
      'animationDelay' : "delay-200ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (10) + ".jpg",
      'description': "Tokyo - Shibuya",
      'animationDelay' : "delay-400ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (11) + ".jpg",
      'description': "Cambodia - Phnom Penh",
      'animationDelay' : "delay-500ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (12) + ".jpg",
      'description': "Myanmar - Yangon",
      'animationDelay' : "delay-600ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (13) + ".jpg",
      'description': "Philippines - Bohol",
      'animationDelay' : "delay-700ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (6) + ".jpg",
      'description': "New Zealand - Canterbury",
      'animationDelay' : "delay-900ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (5) + ".jpg",
      'description': "Norway - Jotunheimen",
      'animationDelay' : "delay-800ms"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (7) + ".jpg",
      'description': "Philippines - Virgin Island",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (8) + ".jpg",
      'description': "South Korea - Seoul",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (9) + ".jpg",
      'description': "Philippines - Panglao Island",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (4) + ".jpg",
      'description': "Laos",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (21) + ".jpg",
      'description': "New Zealand - Richmond Forest Park",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (15) + ".jpg",
      'description': "Philippines",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (16) + ".jpg",
      'description': "After the rain",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (17) + ".jpg",
      'description': "Kea - New Zealand",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (18) + ".jpg",
      'description': "Philippines - Virgin Island",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (19) + ".jpg",
      'description': "Laos - Luang Prabang",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (20) + ".jpg",
      'description': "Philippines",
      'animationDelay' : "delay-1s"
    });
    this.pictures.push({
      'path' : "../../../assets/pictures/"+ (14) + ".jpg",
      'description': "Austria - Hinterglemm",
      'animationDelay' : "delay-1s"
    });
  }

}



