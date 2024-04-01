import { Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PropriedadesComponent } from './pages/propriedades/propriedades.component';

export const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'propriedades', component: PropriedadesComponent },
  { path:'contato', component: ContatoComponent },
  { path:'galeria', component: GaleriaComponent },
  { path:'sobre', component: SobreComponent },
  { path:'**', component: NotFoundComponent },
];
