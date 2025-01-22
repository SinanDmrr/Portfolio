import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  name = 'Sinan';
}
