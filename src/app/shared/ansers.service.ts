import { Injectable } from '@angular/core';
import { Answer } from '../shared/answer';
import { HttpClient } from '@angular/common/http';
import { answerdata } from '../shared/answergo';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class AnsersService {

  


  go : answerdata;


  answerList:Answer[];

  readonly goquesUrl = "http://09227a7c.ngrok.io/api/Questions/UploadQuestions";


  readonly home_ques_url="http://09227a7c.ngrok.io/api/Answers/GetAnswers/";

  answerUrl = "http://09227a7c.ngrok.io/api/Answers/UploadAnswers";

  voteUrl = "http://09227a7c.ngrok.io/api/Votes/UploadVotes";

  constructor(private http:HttpClient)
   { }

   getAnswerList(id){

       console.log('inside ansques');
       

   return  this.http.get(this.home_ques_url + id +'/1')
   .toPromise().then(res=>this.answerList=res as Answer[]);
   //console.log('after home');
   

   //console.log(questionList.questionData);
   
   
   }

  postAnswer(answ:NgForm){

    //this.go.Id="dummy";
    // this.go.answer=answ.value.answer;

    // this.go.quesId=6;

    //const formData : FormData = new FormData();
    //formData.append('Id','dummy');
    //formData.append('answer',answ);
    //formData.append('quedId','6');
    //console.log(formData);
    



   // var formData = "answer:" + answ + ",Id:" + "dummy"  +  ",quesId:" + "6" ;
    //console.log(this.go);
    

    return this.http.post(this.answerUrl,answ);
  }

  postVote(vote){
    return this.http.post(this.voteUrl,vote);
  }
      


}

