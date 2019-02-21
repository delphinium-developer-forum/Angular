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
   return  this.http.get(this.home_ques_url)
   .toPromise().then(res=>this.questionList=res as HomeQuestion[]);
   
   }
  }
    // // .subscribe((data: any)=>
    // {

    //   res => this.questionList = res as HomeQuestion[];
    // }); 
    


    //.toPromise().then(res => this.questionList = res as HomeQuestion[]);

    
//     import { Injectable } from '@angular/core';
//     import { HomeQuestion } from './home-question.model';
//     import {HttpClient} from '@angular/common/http';
//     import { Observable } from 'rxjs';
//     @Injectable({
//       providedIn: 'root'
//     })
//     export class HomeQuestionService {
    
    
//       questionList:HomeQuestion[];
    
//       readonly home_ques_url="";
//       constructor(private http:HttpClient)
//        { }
    
//        getHomeQuestionList():Observable<HomeQuestion[]>{
//        return  this.http.get(this.home_ques_url)
//        .toPromise(response:Response)=><HomeQuestion[]>response.json())
//        .catch(this.handleError);
        



//   }
// }
