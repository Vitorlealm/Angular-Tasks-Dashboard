import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardProject';

  public task: string = "";
  public toDoList: Array<{value: string, status: boolean}> = [];

  public  addTask(){
    let item = {value: this.task, status: false};
    this.toDoList.push(item);
    this.task = "";
  }

  public deleteAll(){
    this.toDoList = [];
  }

  public select(index: number){
    if(this.toDoList[index].status == false){
      let temporaryItem:{value: string, status: boolean} = this.toDoList[index];
      temporaryItem.status = true;
      this.toDoList.splice(index, 1);
      this.toDoList.push(temporaryItem);
    }else{
      let temporaryItem:{value: string, status: boolean} = this.toDoList[index];
      temporaryItem.status = false;
      this.toDoList.splice(index, 1);
      this.toDoList.unshift(temporaryItem);
    }
  }

  public abas(index: number){
    this.toDoList.splice(index, 1);
  }

}
