import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainComponent } from './main/main.component';
import { SkillCardComponent } from './main/skill-card/skill-card.component';
import { SkrollDirective } from './shared/skroll.directive';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'experience', component: ExperienceListComponent },
  { path: 'about', component: AboutPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProjectsListComponent,
    ExperienceListComponent,
    AboutPageComponent,
    MainComponent,
    SkillCardComponent,
    SkrollDirective,
    ProjectCardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
