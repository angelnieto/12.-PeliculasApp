import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private peliculas:Array<Movie> = [];

  constructor(private service: FilmsService, private router:Router) { }

  ngOnInit() {
  }

  onEnter(value:string){
    this.service.getPeliculas(value).subscribe(data =>{
      this.peliculas = data.results;
      console.log(data.results);
    })
  }

  getDetail(idx:number){
    this.router.navigate(['pelicula', idx, 'buscar']);
  }

}
