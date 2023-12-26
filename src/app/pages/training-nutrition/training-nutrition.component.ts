import { Component } from '@angular/core';
import { TrainingPlansComponent } from '../training-plans/training-plans.component';

@Component({
  selector: 'app-training-nutrition',
  standalone: true,
  imports: [TrainingPlansComponent],
  templateUrl: './training-nutrition.component.html',
  styleUrl: './training-nutrition.component.css'
})
export class TrainingNutritionComponent {

}
