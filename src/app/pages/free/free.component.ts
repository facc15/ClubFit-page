import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  selector: 'app-free',
  standalone: true,
  imports: [HeaderModule],
  templateUrl: './free.component.html',
  styleUrl: './free.component.css'
})
export class FreeComponent {

}
