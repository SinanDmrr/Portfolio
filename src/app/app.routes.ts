import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
];
