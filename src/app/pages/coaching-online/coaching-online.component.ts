import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  selector: 'app-coaching-online',
  standalone:true,
  imports: [CommonModule,HeaderModule], 
  templateUrl: './coaching-online.component.html',
  styleUrl: './coaching-online.component.css'
})
export default class CoachingOnlineComponent {

}
