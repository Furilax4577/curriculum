import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isDevMode } from '@angular/core';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WhoIAmComponent } from './components/who-iam/who-iam.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { StudiesComponent } from './components/studies/studies.component';
import { TheyTrustMeComponent } from './components/they-trust-me/they-trust-me.component';
import { StayInTouchComponent } from './components/stay-in-touch/stay-in-touch.component';
import { MainLineComponent } from './components/main-line/main-line.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { TitleComponent } from './components/title/title.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    InterestsComponent,
    BurgerMenuComponent,
    IntroductionComponent,
    WhoIAmComponent,
    SoftSkillsComponent,
    InterestsComponent,
    StudiesComponent,
    TheyTrustMeComponent,
    StayInTouchComponent,
    MainLineComponent,
    LeftMenuComponent,
    RightMenuComponent,
    TitleComponent,
    NewProjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  test: any[] = [];
  isGridVisible = false;

  constructor() {
    for (var i = 1; i < 400; i++) {
      this.test.push(i);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (isDevMode()) {
      if (event.key === 'G' && event.shiftKey) {
        this.isGridVisible = !this.isGridVisible;
      }
    }
  }
}
