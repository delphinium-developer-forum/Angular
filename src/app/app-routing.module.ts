import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnswersComponent } from './answers/answers.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'askQuestion',component:AskQuestionComponent },
  {path:'answers/:id',component:AnswersComponent},
  {path:'uploadImage',component:UploadImageComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
