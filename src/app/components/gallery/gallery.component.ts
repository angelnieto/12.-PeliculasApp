import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent{

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor(private router:Router) { }

  getDetail(idx:number){
    this.router.navigate(['pelicula', idx, 'home']);
  }

}
