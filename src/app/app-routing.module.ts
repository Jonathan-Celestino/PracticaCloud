import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  // more routiings
  { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload'
});
