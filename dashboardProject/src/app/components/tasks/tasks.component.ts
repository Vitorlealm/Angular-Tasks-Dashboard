import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private util: UtilService) { }

  ngOnInit(): void {
  }
  
  public select(index: number){
    this.util.select(index);
   }
 
   public abas(index: number){
     this.util.deleteOne(index);
   }
 
   public toDoList: Array<{value: string, status: boolean}> = this.util.getList();
 

}
