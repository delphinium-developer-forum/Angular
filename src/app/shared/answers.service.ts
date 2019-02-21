import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answers } from './answers.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  answerList: Answers[];
  readonly rootUrl = 'https://70f1bc54.ngrok.io/api/Answers/GetAnswers';
  constructor(private http: HttpClient) { }

  getAnswerList()
  {
    
    console.log('in getAnswerList');
    

    // var ans = this.http.get<Answers[]>(this.rootUrl);
    // return ans;
    
     return this.http.get(this.rootUrl).toPromise().then(res=>this.answerList=res as Answers[]);


  }


}
