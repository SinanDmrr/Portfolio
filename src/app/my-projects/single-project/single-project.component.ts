import { Component, Input } from '@angular/core';
import { IProject } from '../../interfaces/iproject';
import { TranslatePipe } from '@ngx-translate/core';
import 'aos/dist/aos.css';

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
