import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HomeQuestionService } from '../shared/home-question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeQues: HomeQuestionService) { }

 
  ngOnInit() {
      this.homeQues.getHomeQuestionList()
      .then((data: any) => {
        this.homeQues.pageno=data.records.pageNo;
        this.homeQues.totalpages=data.records.total;
        this.homeQues.totalpages=Math.ceil(this.homeQues.totalpages/10);
        this.homeQues.questionList=data.data;
      })
      .catch((err) => {
        console.log(err);
      });
      
  }





  currentPage:number;
  Nav(code:string)
  {
  
    this.currentPage=this.homeQues.pageno;
  
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
      if(this.currentPage+1>this.homeQues.totalpages)
      {
      this.pageUpdater(this.homeQues.totalpages);
      }
      else
      {
      this.pageUpdater(this.currentPage+1);
      }
    }
    if(code=="l")
    {
      this.pageUpdater(this.homeQues.totalpages);

     }
      
  
    this.currentPage=this.homeQues.pageno;
   
  }
  jump(pageNo)
  {
    
    if((pageNo>0)&&(pageNo<=this.homeQues.totalpages))
    {
     this.pageUpdater(pageNo);
     this.currentPage=this.homeQues.pageno;
   }
    else if(pageNo<=0)
    {
      this.pageUpdater(1);
      this.currentPage=this.homeQues.pageno;
   
    }
    else
    {
      this.pageUpdater(this.homeQues.totalpages);
      this.currentPage=this.homeQues.pageno;
   
    }
   
  }
  
  



pageUpdater(page:number)
{
   this.homeQues.jumpToHomeQuestionList(page)
    .then((data: any) => {
      this.homeQues.pageno=data.records.pageNo;
      this.homeQues.questionList=data.data;
    })
    .catch((err) => {
      console.log(err);
    });
   }


}
