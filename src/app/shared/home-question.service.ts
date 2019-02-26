import { Injectable } from '@angular/core';
import { HomeQuestion } from './home-question.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeQuestionService {


  questionList:HomeQuestion[];

  readonly home_ques_url="http://f5417910.ngrok.io/api/Questions/GetQuestions/1";
  

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
