import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full' },
  { path:'login',component:LoginComponent },
  { path:'aa',component:KnowledgeComponent },
  { path:'home',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule) },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeds = [
  LoginComponent,KnowledgeComponent
]
