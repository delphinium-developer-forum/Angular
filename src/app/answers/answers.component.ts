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
    id2;
  ngOnInit() {

   const id = this.route.snapshot.paramMap.get('id');
   this.id2=id;
   const qname = this.route.snapshot.paramMap.get('question');
    console.log(qname);
    
   // this.answer.getAnswerList(id);
    this.answer.getAnswerList(id)
    .then((data: any) => {
      this.answer.pageno=data.records.pageNo;
      this.answer.totalpages=data.records.total;
      this.answer.totalpages=Math.ceil(this.answer.totalpages/10);
      this.answer.answerList=data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  

  }


  OnSubmit(ans,qid){
    
    
    // this.answer.postAnswer(form.value).subscribe((data:any) => {
    //   console.log(data);
      
    this.http.post(this.answer.answerUrl,
      {
        // "ansId":"13",
        // "Id": "dummy",
        // "votes": '-1'
        "quesId": qid,
        "Id": "dummy",
        "answer": ans
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

  currentPage:number;
  Nav(code:string)
  {
  
    this.currentPage=this.answer.pageno;
  
    if(code=="f")
    {
     
   this.pageUpdater(1);
    }
  
    if(code=="p")
    {
      if(this.currentPage-1<=0)
      {
      this.pageUpdater(1);
      }
      else
      {
      this.pageUpdater(this.currentPage-1);
      }
    }
    
  
    if(code=="n")
    {
      if(this.currentPage+1>this.answer.totalpages)
      {
      this.pageUpdater(this.answer.totalpages);
      }
      else
      {
      this.pageUpdater(this.currentPage+1);
      }
    }
    if(code=="l")
    {
      this.pageUpdater(this.answer.totalpages);

     }
      
  
    this.currentPage=this.answer.pageno;
   
  }
  jump(pageNo)
  {
    
    if((pageNo>0)&&(pageNo<=this.answer.totalpages))
    {
     this.pageUpdater(pageNo);
     this.currentPage=this.answer.pageno;
   }
    else if(pageNo<=0)
    {
      this.pageUpdater(1);
      this.currentPage=this.answer.pageno;
   
    }
    else
    {
      this.pageUpdater(this.answer.totalpages);
      this.currentPage=this.answer.pageno;
   
    }
   
  }
  
  



pageUpdater(page:number)
{
   this.answer.jumpToAnswerList(this.id2,page)
    .then((data: any) => {
      this.answer.pageno=data.records.pageNo;
      this.answer.answerList=data.data;
    })
    .catch((err) => {
      console.log(err);
    });
   }









}
