import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { List } from 'src/List';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  @Input() fromParent:List;
  task = "";
  task_id ;
  onEdit = false;
  start_date:Date;
  deadline_date:Date;
  label = "Work";
  status = "New";
  constructor(public activeModal: NgbActiveModal, private api:ApiService, private router:Router) { }
  ngOnInit() {
    if(this.fromParent!=null){
      this.onEdit = true;
      this.task_id = this.fromParent['_id'];
    this.task = this.fromParent.task;
    this.start_date = new Date(( this.fromParent.start_date)) ;
    this.deadline_date = new  Date(( this.fromParent.deadline_date));
    this.label = this.fromParent.label;
    this.status = this.fromParent.status;
  }
  }
 
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  parseDate(value){
     var date = value.substring(6,10);
     date = date + "-";
     date = date + value.substring(3,5);
     date = date + "-";
     date = date + value.substring(0,2);
     return date;
  }
  onSubmit(data){
    if(!this.onEdit){
      const task = {
        user_id:localStorage.getItem('userId'),
        task:data['task-detail'],
        start_date:data['start-date'],
        deadline_date:data['deadline-date'],
        label:data['label'],
        status:data['status']
      };
    this.api.addTask(task).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/signin']);
    }); 
  }else {
       const task = {
      _id:this.task_id,
      user_id:localStorage.getItem('userId'),
      task:data['task-detail'],
      start_date:data['start-date'],
      deadline_date:data['deadline-date'],
      label:data['label'],
      status:data['status']
    };
    this.api.updateTask(task).subscribe(res=>{
      this.router.navigate(['/signin']);
    });
  }
    this.closeModal();
  }
  
}
