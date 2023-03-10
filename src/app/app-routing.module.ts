import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //auth
    path:'',
    //cargar homepageComponent
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {    //raiz
    path:'list',
    loadChildren:()=>import('./modules/list/list.module').then(m=>m.ListModule)
  },
  {
    path:'**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
