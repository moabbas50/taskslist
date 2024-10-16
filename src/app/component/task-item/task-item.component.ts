import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/task/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  bool: boolean = false;

  @Input() task!: Task;

  @Output() toggle = new EventEmitter<void>();
  @Output() deleteitem = new EventEmitter<void>()

  onToggle(): void {
    this.toggle.emit();
  }
  
  delete() {
    this.deleteitem.emit()
  }
}
