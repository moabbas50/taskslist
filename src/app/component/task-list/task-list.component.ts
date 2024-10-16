import { TaskService } from 'src/app/service/task.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Task } from 'src/app/task/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  Task: any;
  tasks: any;
  massege: string = "";
  complete = false;
  id!: any
  constructor(private taskservis: TaskService<Task>, public router: Router) {
  }
  // validation form Reactive form
  ///////////////////add task/////////////////////////
  tasksform = new FormGroup({
    title: new FormControl("", [Validators.required,]),
    completed: new FormControl("false", [Validators.required])
  });
  get title() {
    return this.tasksform.get('name')
  }
  get completed() {
    return this.tasksform.get('name')
  }

  submit() {
    this.taskservis.create(this.tasksform.value).subscribe((data) => {
    })
    this.clear();
    this.massege = 'Task Add successful';
    location.reload();
  }
  // clear value
  embty = new FormGroup({
    title: new FormControl("",),
    completed: new FormControl("",),
  })
  clear() {
    this.tasksform = (this.embty)
  }

  // //////////////////////////////// get tasks//////////////////////////////////////////
  ngOnInit(): void {
    this.taskservis.get().subscribe((data) => {
      this.tasks = data
    },
      (error) => {
        console.error('Error fetching tasks:', error);
      })
  }
  //////////////////update/////////////////
  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    this.Task = {
      'id': task.id,
      'title': task.title,
      'completed': task.completed
    }
    this.taskservis.update(task.id, this.Task).subscribe((data) => {

    })
  }
  //////////////////delete//////////


  deleteTask(id: any) {
    this.taskservis.delet(id).subscribe((data) => {
      location.reload();
    })

  }
}
