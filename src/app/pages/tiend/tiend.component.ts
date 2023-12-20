import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  selector: 'app-tiend',
  standalone: true,
  imports: [HeaderModule],
  templateUrl: './tiend.component.html',
  styleUrl: './tiend.component.css'
})
export class TiendComponent {

}
