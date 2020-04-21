import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  populares:Movie[];
  popularesParaEnanos:Movie[];
  peliculasEnCartelera:Movie[];

  constructor(private service:FilmsService) { }

  ngOnInit() {
    this.service.getPopulares().subscribe(data =>{
      if(data.results.length>6){
        this.populares = data.results.slice(0,6);
      }
      console.log(data);
    })
    this.service.getPopularesParaEnanos().subscribe(data =>{
      if(data.results.length>6){
        this.popularesParaEnanos = data.results.slice(0,6);
      }
      console.log(data);
    })

    this.service.getPeliculasEnCartelera().subscribe(data =>{
      if(data.results.length>6){
        this.peliculasEnCartelera = data.results.slice(0,6);
      }
      console.log(data);

    })
  }
}
