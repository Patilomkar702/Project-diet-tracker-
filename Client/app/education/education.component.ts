import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {

    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  };

  value = localStorage.getItem('name')

  valueof = "";
  


  processLogout(){
    this.modalService.open(LogoutModalComponent, {
      centered: true,
    });
  }
}