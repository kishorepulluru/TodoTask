import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  categorySelected = 'Cateogry1';
  public taskTitle:any;
  public completiondate:any;
  categories=['Cateogry1','Cateogry2','Cateogry3']
  todos = [
    {"task":"HTML I", "endDate":'11-07-2022',"done":true},
    {"task":"CSS","endDate":'11-07-2022',"done":false},
    {"task":"Responsive design","endDate":'11-07-2022',"done":true},
    {"task":"Git","endDate":'11-07-2022',"done":true},
    {"task":"JavaScript I","endDate":'11-07-2022',"done":true},
    {"task":"JavaScript II","endDate":'11-07-2022',"done":false}
    ]
  displayStyle: string='none';

    categoryChanged(catageory:any) {
      this.categorySelected = catageory;
      if(catageory == 'Cateogry1'){
        this.todos = [
          {"task":"HTML I", "endDate":'11-07-2022',"done":true},
          {"task":"CSS","endDate":'11-07-2022',"done":false},
          {"task":"Responsive design","endDate":'11-07-2022',"done":true},
          {"task":"Git","endDate":'11-07-2022',"done":true},
          {"task":"JavaScript I","endDate":'11-07-2022',"done":true},
          {"task":"JavaScript II","endDate":'11-07-2022',"done":false}
          ]
      }
      else if(catageory == 'Cateogry2'){
        this.todos = [
          {"task":"HTML I 2", "endDate":'11-07-2022',"done":false},
          {"task":"CSS3","endDate":'11-07-2022',"done":true},
          {"task":"Responsive design","endDate":'11-07-2022',"done":false},
          {"task":"Git","endDate":'11-07-2022',"done":true},
          {"task":"JavaScript I","endDate":'11-07-2022',"done":true},
          {"task":"JavaScript II","endDate":'11-07-2022',"done":false}
          ]
      }
      else if(catageory == 'Cateogry3'){
        this.todos = [
          {"task":"HTML I 3", "endDate":'11-07-2022',"done":true},
          {"task":"CSS3","endDate":'11-07-2022',"done":true},
          {"task":"Responsive design","endDate":'11-07-2022',"done":false},
          {"task":"Git","endDate":'11-07-2022',"done":false},
          {"task":"JavaScript I","endDate":'11-07-2022',"done":true},
          {"task":"JavaScript II","endDate":'11-07-2022',"done":false}
          ]
      }
    }
    addNewCategory(){
      let index = this.categories.length+1;
      this.categories.push('Category'+index);
    }
    openPopup() {
      this.displayStyle = "block";
    }
    closePopup() {
      this.displayStyle = "none";
    }
    saveTask(){
      let data =  {"task":this.taskTitle, "endDate":this.completiondate,"done":false}
      this.todos.push(data);
      this.closePopup();
    }
}
