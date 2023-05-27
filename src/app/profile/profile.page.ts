import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterModule,ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class ProfilePage implements OnInit {

  profileId : string | null;
  character: any;

  constructor(
    private activatedRoute :ActivatedRoute,
    private http:HttpClient,


  ) { }

  ngOnInit() {

      this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
      this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe(res =>this.character = res);
  }

}