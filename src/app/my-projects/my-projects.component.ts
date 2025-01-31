import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IProject } from '../interfaces/iproject';
import { SingleProjectComponent } from './single-project/single-project.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [TranslatePipe, SingleProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit, AfterViewInit {
  projects: IProject[] = [
    {
      img: 'assets/images/join.png',
      header: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Firebase'],
      githubPath: '',
      liveTestPath: '',
    },
    {
      img: 'assets/images/el-polo-loco.png',
      header: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'SCSS'],
      githubPath: 'https://github.com/SinanDmrr/El-Pollo-Loco',
      liveTestPath: 'https://elpololoco.developerdemir.com/',
    },
    {
      img: 'assets/images/pokedex.png',
      header: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'SCSS', 'API'],
      githubPath: 'https://github.com/SinanDmrr/pokedex',
      liveTestPath: 'https://pokedex.developerdemir.com/',
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: false,
        offset: 100,
      });
    }, 300);
  }

  ngAfterViewInit() {
    AOS.refresh();
  }
}
