import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VinilosComponent } from './pages/vinilos/vinilos.component';
import { ViniloComponent } from './pages/vinilo/vinilo.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
 {path:'home',component: HomeComponent},
 {path:'vinilos', component: VinilosComponent},
 {path:'vinilo/:id', component: ViniloComponent},
 {path: 'nosotros', component: NosotrosComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: '**', component: Error404Component}
];
