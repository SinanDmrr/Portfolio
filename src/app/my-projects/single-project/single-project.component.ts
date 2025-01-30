import { Component, Input, input } from '@angular/core';
import { IProject } from '../../interfaces/iproject';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() project: IProject = {
    img: '',
    header: '',
    skills: [],
    githubPath: '',
    liveTestPath: '',
  };
  @Input() index?: number;
  @Input() isReverse: boolean = false;
}
