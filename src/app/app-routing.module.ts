import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {GameComponent} from './game/game.component';
import {TakePictureComponent} from './take-picture/take-picture.component';
import {ResultsComponent} from './results/results.component';
import {IntroComponent} from './intro/intro.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'tutorial', component: TutorialComponent},
  { path: 'game', component: GameComponent},
  { path: 'take-picture', component: TakePictureComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'intro', component: IntroComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
