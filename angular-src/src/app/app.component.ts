import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  scrollDownInitialValue: number = 0;
  scrollDownStarted = true;
  minScrollDistance: number = 150; // How far the user has to scroll before the menu hides

  ngOnInit() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = ()=> {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) { //scrolled up
        document.getElementById("navbarContainer").style.top = "0";
        this.scrollDownStarted = false;
        this.scrollDownInitialValue = 0;
      } else { //scrolled down
        if(this.scrollDownStarted){

          if(currentScrollPos>this.scrollDownInitialValue+this.minScrollDistance){//if scrolled down far enough
            document.getElementById("navbarContainer").style.top = "-100px";
          }
        }else{//frist time reacting to scrollDown
          this.scrollDownInitialValue=currentScrollPos;
          this.scrollDownStarted=true;
        }
        
      }
      prevScrollpos = currentScrollPos;
    }
  }
}

