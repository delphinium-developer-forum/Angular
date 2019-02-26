import { Component, OnInit } from '@angular/core';
import { HomeQuestionService } from '../shared/home-question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeQues: HomeQuestionService) { }

  ngOnInit() {
    console.log('before');
    
    this.homeQues.getHomeQuestionList();
    // for(let a in this.homeQues.questionList)
    // console.log(a.questionData);
  }

}
