import { Component } from '@angular/core';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardProject';

  constructor(private util: UtilService) { }

  public task: string = "";

  public  addTask(){
    this.util.addTask(this.task);
  }

  public deleteAll(){
    this.util.deleteAll();
  }

}
