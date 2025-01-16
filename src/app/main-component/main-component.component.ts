import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyProjectsComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
})
export class MainComponentComponent {}
