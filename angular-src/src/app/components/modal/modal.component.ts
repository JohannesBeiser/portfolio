import { Component, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})


export class ModalComponent implements OnInit {

  sanitizer = DomSanitizer.prototype;
  constructor(public _modalService: ModalService) { }

  ngOnInit() {
  }

  private innerModalClicked(e) {
    e.stopPropagation();
  }

  hotkeys(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 27:
      this._modalService.toggleIsShown();
        //ESC
        break;
      case 37:
        //left
        break;
      case 39:
        //left
        break;    
    }
  }



  getStyle() {
    // snip snip -> fetch the url from somewhere
    let path = this._modalService.modalContent.path;
    const style = `background-image: url(${path})`;
    // sanitize the style expression
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  getImageUrl() {
    // return "url(" + this._modalService.modalContent.path + ")";
    return "" + this._modalService.modalContent.path;

  }

}



