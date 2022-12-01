import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "main",
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
        // loadChildren: () => import('./app.module').then(m => m.AppModule)
      },
      // {
      //   path: 'comission',
      //   component: ListComponent,
      //   loadChildren: () => import('./views/private/comission/comission.module').then(m => m.ComissionModule)
      // },
      // {
      //   path: 'comission/create',
      //   component: CreateComponent,
      //   loadChildren: () => import('./views/private/comission/comission.module').then(m => m.ComissionModule)
      // }
    ]
  },
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
