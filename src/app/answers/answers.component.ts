import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../shared/answers.service';
//import { Answers } from "../shared/answers.model";
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private answers : AnswersService) { }
  //data : Answers[];
  ngOnInit() 
  {
    console.log('inAns');
     // data : Answers[];
      this.answers.getAnswerList();//.subscribe((metadata:Answers[])=>{
      //   this.data = metadata;
      //console.log(this.answers.answerList[0].answer9);
      
       // console.log(this.data);
      console.log('afterAns');
      
  }

}
