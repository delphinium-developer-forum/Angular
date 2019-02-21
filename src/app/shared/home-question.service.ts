import { Injectable } from '@angular/core';
import { HomeQuestion } from './home-question.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeQuestionService {


  questionList:HomeQuestion[];

  readonly home_ques_url="http://c829e7fe.ngrok.io/api/Questions/GetQuestions";
  constructor(private http:HttpClient)
   { }

   getHomeQuestionList(){

       console.log('inside homeques');
       
   return  this.http.get(this.home_ques_url)
   .toPromise().then(res=>this.questionList=res as HomeQuestion[]);
   //console.log('after home');
   

   //console.log(questionList.questionData);
   
   
   }
}