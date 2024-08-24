import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Path } from '../../utils/path';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component {
  paths: Path[] = [
    { path: '/home', nombre: 'Home'}
  ];
}
