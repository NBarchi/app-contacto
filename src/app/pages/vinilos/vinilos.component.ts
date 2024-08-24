import { Component } from '@angular/core';
import { Vinilos } from '../../utils/vinilos';
import * as vinilosData from '../../../../public/json/vinilosData.json'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vinilos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vinilos.component.html',
  styleUrl: './vinilos.component.css'
})
export class VinilosComponent {

  vinilos: Vinilos[] = (vinilosData as any).default;

  constructor(private router: Router){}

  ngOnInt(): void{}

  onclickButton(): void{
    console.log("Boton presionado"); 
  }

  onClickVinilo(vinilo : Vinilos): void{
    this.router.navigate(["/vinilo", vinilo.id])
  } 

}
