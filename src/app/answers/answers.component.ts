import { Component, OnInit } from '@angular/core';
import { AnsersService } from "../shared/ansers.service";
import { ActivatedRoute } from '@angular/router';
import{NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private answer : AnsersService,
              private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.answer.getAnswerList(id);

  }


  OnSubmit(ans,qid){
    
    
    // this.answer.postAnswer(form.value).subscribe((data:any) => {
    //   console.log(data);
      
    this.http.post(this.answer.answerUrl,
      {
        "ansId":"13",
        "Id": "dummy",
        "votes": '-1'
        //"quesId": qid,
        //"Id": "dummy",
        //"answer": ans
      }).subscribe(data=>{
        console.log("Post rewquest successful",data);
      },
      error=>{
        console.log("Error",error);
      }
      );
    
  }

  upvote(){
    this.http.post(this.answer.voteUrl,
      {
        "ansId":"13",
        "Id": "dummy",
        "votes": '+1'
        //"quesId": qid,
        //"Id": "dummy",
        //"answer": ans
      }).subscribe(data=>{
        console.log("upvote rewquest successful",data);
      },
      error=>{
        console.log("Error",error);
      }
      );
  }

  downvote(){
    this.http.post(this.answer.voteUrl,
      {
        "ansId":"13",
        "Id": "dummy",
        "votes": '-1'
        //"quesId": qid,
        //"Id": "dummy",
        //"answer": ans
      }).subscribe(data=>{
        console.log("downvote rewquest successful",data);
      },
      error=>{
        console.log("Error",error);
      }
      );
  }

}
