import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vinilos } from '../../utils/vinilos';
import * as vinilosData from '../../../../public/json/vinilosData.json'
import { Router, RouterLink, Route } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  vinilos: Vinilos[] = (vinilosData as any).default;

  constructor(private router: Router){}

  onClickVinilos(): void{
    this.router.navigate(["/vinilos"])
  } 

}
