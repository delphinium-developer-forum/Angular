import { Component, OnInit } from '@angular/core';
import { HomeQuestionService } from '../shared/home-question.service';
import { HttpClient } from '@angular/common/http';
import { AnsersService } from "../shared/ansers.service";

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private ques : AnsersService, private http: HttpClient) { }

  ngOnInit() {
  }

  OnSubmit(question){
    
    this.http.post(this.ques.goquesUrl,
      {
        "Id": "dummy",
        "question": question
      }).subscribe(data=>{
        console.log("Question Post request successful",data);
      },
      error=>{
        console.log("Error",error);
      }
      );
    
  }

}
