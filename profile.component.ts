import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  USER:any;
  check:boolean=true;
 
  constructor() {
  this.USER={Name:'Linsa Lison',
  Job: 'Student',
  Address:'abc',
  Phone:['86455248524']
};  
}
tooglecheck(){
  this.check=!this.check;
}

  ngOnInit() {
  }

}
