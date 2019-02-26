import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'answers/:id',component:AnswersComponent},
  // {path:'answers',component:AnswersComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
