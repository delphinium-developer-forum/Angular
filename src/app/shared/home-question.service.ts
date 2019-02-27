import { Injectable } from '@angular/core';
import { HomeQuestion } from './home-question.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeQuestionService {


  questionList: HomeQuestion[];

  pageno:number=0;
  totalpages:number;

  readonly home_ques_url = "http://3cf0e117.ngrok.io/api/Questions/GetQuestions";
  goquesUrl = "http://3cf0e117.ngrok.io/api/Questions/UploadQuestions";
  readonly jump_home_ques_url = "http://3cf0e117.ngrok.io/api/Questions/GetQuestions/";


  // readonly home_ques_url = "../assets/test.json";
  // goquesUrl = "http://17b7a39b.ngrok.io/api/Questions/UploadQuestions";
  // readonly jump_home_ques_url = this.home_ques_url;


  constructor(private http: HttpClient) { }

  getHomeQuestionList() {

    return this.http.get(this.home_ques_url + '/1', {}).toPromise();
    this.pageno=1;

  }

  postQuestion(question) {
    return this.http.post(this.goquesUrl, question);
  
  }
  jumpToHomeQuestionList(pageNo:number) {


    this.pageno=pageNo;
    return this.http.get(this.jump_home_ques_url+this.pageno, {}).toPromise();


  }




}
