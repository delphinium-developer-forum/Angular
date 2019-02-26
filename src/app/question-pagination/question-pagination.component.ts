import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeQuestionService } from '../shared/home-question.service';

@Component({
  selector: 'app-question-pagination',
  templateUrl: './question-pagination.component.html',
  styleUrls: ['./question-pagination.component.css']
})
export class QuestionPaginationComponent implements OnInit {

  constructor(private http:HttpClient,private questionSerivice:HomeQuestionService) { }

  ngOnInit() {
  }
firstPage()
{
  this.questionSerivice.getHomeQuestionList();

}

}
