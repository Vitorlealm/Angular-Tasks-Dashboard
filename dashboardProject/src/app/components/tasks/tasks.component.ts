import { Component, OnInit } from '@angular/core';
import { GetData } from 'src/app/interfaces/get-data';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public toDoList: Array<GetData> = [];

  constructor(private util: UtilService) { }

  ngOnInit(): void {
    this.util.getList().subscribe((res) => this.toDoList = res)
  }
  
  public select(index: number){
    this.util.select(index);
   }
 
   public abas(index: number){
     this.util.deleteOne(index);
   }
 
 

}
