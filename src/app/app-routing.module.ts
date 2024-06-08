import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
    {path : 'register' , loadChildren : () => import("../../src/app/auth/auth.module").then((m) => m.AuthModule)},
    {path : 'login' , loadChildren : () => import("../../src/app/auth/auth.module").then((m) => m.AuthModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
