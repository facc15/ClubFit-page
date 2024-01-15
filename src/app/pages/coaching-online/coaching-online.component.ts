import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { Router } from '@angular/router';
import { FooterModule } from '../../components/footer/footer.module';
import { BEHAVIOR, CommonService } from '../../services/common.service';

@Component({
  selector: 'app-coaching-online',
  standalone:true,
  imports: [CommonModule,HeaderModule,FooterModule], 
  templateUrl: './coaching-online.component.html',
  styleUrl: './coaching-online.component.css'
})
export default class CoachingOnlineComponent  implements OnInit,OnDestroy{

  
  public days!:number;
  public minutes!:number;
  public hours!:number;
  public seconds!:number;
  public diferencia!:Date;
  private intervalId: any;

  constructor(private router:Router,private commonService:CommonService)
  {

  }

  ngAfterViewInit(): void {
    this.commonService.scrollTo('header', BEHAVIOR.auto)
  }

  ngOnInit()
  {
    const fechaInicio: Date = new Date('2024-02-01T00:00:00');

    this.intervalId = setInterval(() => {
      var ahora = new Date();
      var diferencia = fechaInicio.getTime() - ahora.getTime();

      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      // Actualiza los elementos HTML con los valores calculados
      this.days = dias;
      this.hours = horas;
      this.minutes = minutos;
      this.seconds = segundos;
    }, 1000);
  }


  ngOnDestroy() {
    // Desuscribe el intervalo al destruir el componente
    clearInterval(this.intervalId);
  }

  goToFree()
  {
    this.router.navigateByUrl('gratarola');
  }

  goToTraining()
  {
    this.router.navigateByUrl("entrenamiento");
  }

  goToTrainingNutrition()
  {
    this.router.navigateByUrl("entrenamiento-nutricion");
  }
  

}
