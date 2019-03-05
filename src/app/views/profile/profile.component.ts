import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private api : ApiService,
  ) { }

  ngOnInit() {
  }

  getProfiles(){
    this.api.getProfiles().subscribe( response =>{
      
    })
  }

}
