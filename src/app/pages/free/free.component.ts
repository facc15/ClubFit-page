import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { AreyoureadyComponent } from '../../components/areyouready/areyouready.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free',
  standalone: true,
  imports: [HeaderModule,FooterModule,AreyoureadyComponent],
  templateUrl: './free.component.html',
  styleUrl: './free.component.css'
})
export class FreeComponent {

  constructor(private router:Router)
  {

    
  }

  goToBlog(number:number)
  {
    switch(number)
    {
      case 1:
        break;
      case 2:
        this.router.navigate(['https://drive.google.com/drive/u/0/folders/1-7SkaddqM1YVVhcDORqUfZkm-BhbCw9z']);
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
        

    }
   
  }

}
