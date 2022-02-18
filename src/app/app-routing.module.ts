import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path: '', redirectTo: '/image', pathMatch: 'full'},
  {path: 'image', component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
