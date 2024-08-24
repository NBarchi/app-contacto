import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import * as vinilosData from '../../../../public/json/vinilosData.json'
import { Vinilos } from '../../utils/vinilos';

@Component({
  selector: 'app-vinilo',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './vinilo.component.html',
  styleUrl: './vinilo.component.css'
})
export class ViniloComponent {

    vinilos?: Vinilos;

    constructor(private route: ActivatedRoute){};

    ngOnInit():void{
      this.route.paramMap.subscribe((params)=> {
        const id=params.get("id");
        this.vinilos = ((vinilosData as any).default as Vinilos[]).find((vinilos) => vinilos.id === Number(id))
      })
    }
}
