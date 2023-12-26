import { Component } from '@angular/core';
import { TrainingPlansComponent } from '../training-plans/training-plans.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [TrainingPlansComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

}
