import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-match-card.component.html',
  styleUrl: './live-match-card.component.css'
})
export class LiveMatchCardComponent {
  @Input() data:any
}
