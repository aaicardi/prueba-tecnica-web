import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './master-page/body/body.component';
import { HomeComponent } from './master-page/home/home.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent,
    children: [
      { path: '', component: HomeComponent },
       { path: 'master-page', loadChildren: () =>
       import('./master-page/master-page.module').then(m => m.MasterPageModule)},
      { path: '**',  component: HomeComponent },
    ]
  },
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: '**', component: BodyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
