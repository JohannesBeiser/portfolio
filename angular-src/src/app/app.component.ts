import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  menuHiding: boolean = false; // set to true if menu should hide when scrolling down

  ngOnInit() {
    if(this.menuHiding){
      var prevScrollpos = window.pageYOffset;
      window.onscroll = ()=> {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbarContainer").style.top = "0";
        } else {
          document.getElementById("navbarContainer").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
}

