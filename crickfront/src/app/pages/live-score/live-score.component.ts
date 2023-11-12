import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule, LiveMatchCardComponent,NgxTypedJsModule],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit {

  constructor(private _api: ApiService) {

  }
 
  liveData: any;
  loading = false
  
  ngOnInit(): void {
    this.loadScore()
  }

  loadScore() {
    this.loading = true
    
    this._api.getLiveScore().subscribe({
      next: data => {
        this.liveData = data;
        
        // console.log("hello")
        console.log(this.liveData);    
        this.loading = false
      },
      error: (error) => {
        console.log(error)
        this.loading = false
      }
    })

  }

  refreshScore() {

    
    this.loadScore()
  }


}
