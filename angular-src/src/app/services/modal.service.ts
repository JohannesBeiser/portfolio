import { Injectable } from '@angular/core';
import { iPictureObject } from "../components/photography/photography.component";


@Injectable()
export class ModalService {

  public isShown:  boolean = false;
  public modalContent : iPictureObject;

  constructor() { }

  public setIsShown(isShown: boolean){
    this.isShown= isShown;
  }

  public toggleIsShown(){
    this.isShown = !this.isShown;
  }

  public showModal(content: iPictureObject){
    this.setIsShown(true);
    this.modalContent = content;
  }

  
  
}
