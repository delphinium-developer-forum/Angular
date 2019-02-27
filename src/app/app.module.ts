import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswersComponent } from './answers/answers.component';
import { FormsModule }   from '@angular/forms';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { QuestionPaginationComponent } from './question-pagination/question-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponent,
    AnswersComponent,
    AskQuestionComponent,
    UploadImageComponent,
    QuestionPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
