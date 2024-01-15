import { Injectable } from '@angular/core';

export enum BEHAVIOR {
  smooth = 'smooth',
  auto = 'auto'
}

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor() {

   }

   scrollTo(element: string, behavior: BEHAVIOR): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: behavior, block: "start", inline: "nearest"});
  }
}
