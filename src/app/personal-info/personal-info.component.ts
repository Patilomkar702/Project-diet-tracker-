import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {

  
  name =localStorage.getItem('name');
  age =localStorage.getItem('age');
  height =localStorage.getItem('height');
  weight =localStorage.getItem('weight');
  consume = Math.round((this.weight * 2.24)*10.1);
  err=true;

  num(){
    return Math.round((this.weight * 2.24)*10.1);
  };

  cusmcal(val){
    this.consume= this.consume - val;
    this.err=true;
  };

  diablebtn(){
    console.log(this.err)
    this.err=false;
    console.log(this.err)
  }

  resetbtn(){
    this.consume = Math.round((this.weight * 2.24)*10.1);
    console.log(this.consume);
  }
 


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  
processLogout(){
  this.modalService.open(LogoutModalComponent, {
    centered: true,
  });


}};
