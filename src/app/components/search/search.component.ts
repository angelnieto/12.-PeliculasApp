import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private peliculas:Array<Movie> = [];
  private value:string;

  constructor(private service: FilmsService, private activatedRoute:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      if(params['value']){
        this.onEnter(params['value']);
      }
    })
  }

  onEnter(value:string){
    this.value = value;
    this.service.getPeliculas(value).subscribe(data =>{
      this.peliculas = data.results;
      console.log(data.results);
    })
  }

  getDetail(idx:number){
    this.router.navigate(['pelicula', idx, 'buscar', this.value]);
  }

}
