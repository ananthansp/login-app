import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  profileForm = new FormGroup({
    userName: new FormControl(''),
   password: new FormControl('')});
  constructor() {
   }

  ngOnInit() {
  }
}
