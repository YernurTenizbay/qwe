import {Component, Input, OnInit} from '@angular/core';
import {Tasklists} from '../../models/task-lists';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  @Input() tasklists: Tasklists[] = [{
    task_id: 1,
    task_name: 'asdwa',
    task_list : [
      {
        title: 'qwesfq',
        deadline: '02.01.05',
        desc: 'asdw'
      },
      {
        title: 'qweq',
        deadline: '02.01.05',
        desc: 'aswdw'
      },
      {
        title: 'qasdwa',
        deadline: '02.08.05',
        desc: 'aswdwdw'
      }
    ]
  },

  ];
  constructor() { }

  ngOnInit(): void {


  }

}
