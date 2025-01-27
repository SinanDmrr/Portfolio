import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { IProject } from '../interfaces/iproject';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [TranslatePipe, SingleProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  projects: IProject[] = [
    {
      img: '../../assets/images/join.png',
      header: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Firebase'],
      githubPath: '',
      liveTestPath: '',
    },
    {
      img: '../../assets/images/el-polo-loco.png',
      header: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'SCSS'],
      githubPath: 'https://github.com/SinanDmrr/El-Pollo-Loco',
      liveTestPath:
        'https://sinan-demir.developerakademie.net/Modul%2012/El%20Pollo%20Loco/index.html',
    },
    {
      img: '../../assets/images/pokedex.png',
      header: 'Join',
      skills: ['JavaScript', 'HTML', 'SCSS', 'API'],
      githubPath: 'https://github.com/SinanDmrr/pokedex',
      liveTestPath:
        'https://sinan-demir.developerakademie.net/Modul%209/Pokedex/index.html',
    },
  ];
}
