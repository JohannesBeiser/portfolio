import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CompCommunicationService  } from "../../services/comp-communication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  constructor(private _compCoService: CompCommunicationService) { }

  ngOnInit() {
    this._compCoService.setMenuBackground(false);
  }

  ngOnDestroy(): void {
   this._compCoService.setMenuBackground(true);
  }

  

}
