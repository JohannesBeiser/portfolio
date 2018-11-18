import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

/** Sites */
import { PhotographyComponent } from './components/photography/photography.component';
import { AboutComponent } from './components/about/about.component';
import { TravelComponent } from './components/travel/travel.component';
import { WorkComponent } from './components/work/work.component';
import { ModalComponent } from './components/modal/modal.component';

// Page Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

//Sub-Components
import { ArticleDetailViewComponent } from './components/travel/article-detail-view/article-detail-view.component';

//Web Components
import { ModalViewComponent } from './components/modal-view/modal-view.component';

// Services
import { ImageUploadService } from "./services/image-upload.service";
import { ArticlesService } from "./services/articles.service";
import { CompCommunicationService  } from './services/comp-communication.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ModalService } from "./services/modal.service";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'photography', component:   PhotographyComponent},
  {path:'about', component:   AboutComponent},
  {path:'travel', component:   TravelComponent},
  {path:'work', component:   WorkComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhotographyComponent,
    AboutComponent,
    TravelComponent,
    WorkComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ArticleDetailViewComponent,
    ModalViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, ModalService, CompCommunicationService, ArticlesService,ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
