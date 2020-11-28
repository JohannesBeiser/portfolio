import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-site',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {


  constructor() { }


  activeExpenseImage: number = 0;
  activeTravelImage: number = 0;

  ngOnInit() {
  }

  updateActiveExpenseImage(value: number){
    const numberOfExpenseImages = 5;
    if(this.activeExpenseImage == 0 && value <0){
      this.activeExpenseImage = numberOfExpenseImages -1
    }else if(this.activeExpenseImage == numberOfExpenseImages-1 && value >0){
      this.activeExpenseImage = 0
    }else{
      this.activeExpenseImage+= value;
    }
  }

  updateActiveTravelImage(value: number){
    const numberOfExpenseImages = 6;
    if(this.activeTravelImage == 0 && value <0){
      this.activeTravelImage = numberOfExpenseImages -1
    }else if(this.activeTravelImage == numberOfExpenseImages-1 && value >0){
      this.activeTravelImage = 0
    }else{
      this.activeTravelImage+= value;
    }
  }

}
