import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ISkill } from '../interfaces/iskill';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills: ISkill[] = [
    { img: 'assets/images/angular-icon.png', name: 'Angular' },
    { img: 'assets/images/react-logo.png', name: 'React' },
    { img: 'assets/images/typescript-icon.png', name: 'TypeScript' },
    { img: 'assets/images/javascript.icon.png', name: 'JavaScript' },
    { img: 'assets/images/html5-icon.png', name: 'HTML' },
    { img: 'assets/images/css3-icon.png', name: 'CSS' },
    { img: 'assets/images/scss-icon.png', name: 'SCSS' },
    {
      img: 'assets/images/tailwind.png',
      name: 'Tailwind',
    },

    { img: 'assets/images/rest-api-icon.png', name: 'REST API' },
    { img: 'assets/images/git-icon.png', name: 'GIT' },
    { img: 'assets/images/github-icon.png', name: 'GitHub' },
    { img: 'assets/images/firebase-icon.png', name: 'Firebase' },
    { img: 'assets/images/sql-icon.png', name: 'SQL' },

    { img: 'assets/images/csharp-icon.png', name: 'C-Sharp' },
    { img: 'assets/images/vscode-icon.png', name: 'VS Code' },
    { img: 'assets/images/scrum-icon.png', name: 'SCRUM' },
    { img: 'assets/images/kanban-icon.png', name: 'Kanban' },
    { img: 'assets/images/grow-icon.png', name: 'Growth mindset' },
  ];
}
