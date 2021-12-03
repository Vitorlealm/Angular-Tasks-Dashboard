import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public toDoList: Array<{value: string, status: boolean}> = [];

  public  addTask(task: string){
    let item = {value: task, status: false};
    this.toDoList.push(item);
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

  public deleteOne(index: number){
    this.toDoList.splice(index, 1);
  }

  public getList(){
    return this.toDoList;
  }
}
