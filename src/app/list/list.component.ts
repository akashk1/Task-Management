import { Component, OnInit } from '@angular/core';
import { List } from 'src/List';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  toDos:any = [];
  error = false;
  index = -1;
  errorText = "";
  label = {
    'Personal': 'green',
    'Work':'blue',
    'Shopping':'green',
    'Others':'yellow'
  }
  data:List = new List("0","0","0","0","0","0","0");

  constructor(private modalService: NgbModal, private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.error = false;
    this.index = -1;
    if(!this.api.isLoggedIn()){
      this.router.navigate(['/signin']);
    }
    console.log(this.api.list);
    this.api.getAllTasks().subscribe(res=>{
         this.toDos = res;
    });
  }
  openFormModal(data) {
    const modalRef = this.modalService.open(ModalFormComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  Edit(index){
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.fromParent = this.toDos[index];
    console.log(this.toDos[index]);
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }
  onDelete(index){
    this.api.deleteTask(this.toDos[index]['_id']).subscribe(res=>{
      this.router.navigate(['/signin']);
      console.log(res);
    });
  }
  addToArchive(index){
    if(this.toDos[index]['status']=='Completed'){
      console.log(this.toDos[index]);
      this.api.addToArchive(this.toDos[index]).subscribe(res => {
        this.onDelete(index);
      })
    }else{
      this.error = true;
      this.index = index;
      this.errorText = "Task is not completed, So can't be added to archive";
    }
  }
  Error(){
    this.error = false;
  }
}
