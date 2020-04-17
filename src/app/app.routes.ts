import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {DetailComponent} from './components/detail/detail.component';

const APP_ROUTES: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: SearchComponent},
  {path: 'pelicula/:id/:origin', component: DetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
