import { Component, ElementRef, Input, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.less']

})

export class ModalViewComponent implements OnInit, OnDestroy {


  @Output() closing = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  private closeModal(){
    this.closing.emit()
  }

  private outerAreaClicked(){
  this.closeModal();
  }

  private innerAreaClicked(e: Event){
    e.stopPropagation();
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
   
  }
}
