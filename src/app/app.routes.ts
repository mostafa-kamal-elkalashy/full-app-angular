import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {path:"user",loadChildren:()=>import('./features/components/users-routing.module').then((m)=>m.usersModule)},
  {path:"admin",loadChildren:()=>import('./features/admin/admin-routing.module').then((m)=>m.AdminModule)},

  {path:"", pathMatch:'full',redirectTo:"user"}


];
