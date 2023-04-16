import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  

  localItem?:string | null;
  todos : Todo[];

  
     
  constructor() {


    this.todos  = [
      // {
      //   sno : 1 ,
      //   title : "this is title 1" ,
      //   desc : "this is desc" ,
      //   active : true
      // } ,

      
    ];

    this.localItem = localStorage.getItem("todos");

    if (this.localItem == null) {

      this.todos =[];
      
    } else {
      this.todos = JSON.parse(this.localItem)
    }


   

}


deleteTodo(todo:Todo) {
console.log(todo)

const index = this.todos.indexOf(todo);
this.todos.splice(index , 1);
localStorage.setItem("todos" , JSON.stringify(this.todos));

console.log("deleted todo  ", todo)
}


addTodo(todo:Todo) {
  console.log("Todo added " , todo)
  
    this.todos.push(todo);
  localStorage.setItem("todos" , JSON.stringify(this.todos));

  }


  
toggleTodo(todo:Todo) {

  const index = this.todos.indexOf(todo);
  this.todos[index].active =  !this.todos[index].active
    console.log("toggle", todo)
  localStorage.setItem("todos" , JSON.stringify(this.todos));

  }
}