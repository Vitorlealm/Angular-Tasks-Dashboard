import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetData } from '../interfaces/get-data';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  public toDoList: Array<GetData> = [{value: "acordar", status: false}];

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

  public getList(): Observable<Array<GetData>>{
  //  return this.toDoList;
  return this.http.get<Array<GetData>>("http://localhost:3000/to-dos").pipe(res => res, error => error)
  }
}
