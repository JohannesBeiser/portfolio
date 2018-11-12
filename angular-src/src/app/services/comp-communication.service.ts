import { Injectable } from '@angular/core';

@Injectable()
export class CompCommunicationService {

  backgroundVisible: boolean= true;
  
  constructor() { }

  public setMenuBackground(isVisible: boolean){
    this.backgroundVisible = isVisible;
    console.log("the background has been set to: " + isVisible);
  }



}
