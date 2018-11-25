import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CompCommunicationService } from "../../services/comp-communication.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { trigger ,state,transition, style, animate} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [
    // trigger('fade',[
    //   transition('void => *', [
    //     style({ opacity: 0}),
    //     animate(2000)
    //   ])
    // ])
    trigger('swipe',[
          transition('void => *', [
            style({ transform: 'translateX(+110%)'}),
            animate('200ms ease')
         ]),
         transition('* => void',[
          animate('200ms ease', style({ transform: 'translateX(+110%)'}))
         ])
        ]),
        trigger('fade',[
          transition('void <=> *', [
            style({ opacity: 0}),
            animate(800)
         ])
        ])
    ] 
})
export class NavbarComponent implements OnInit {

  dropdownActive: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    public _compCoService: CompCommunicationService) { }

  ngOnInit() {
    this.dropdownActive= false;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

  toggleDropdownMenu(){
    this.dropdownActive= !this.dropdownActive;
  }

}
