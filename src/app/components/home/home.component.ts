import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Router } from '@angular/router';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  populares1:Movie[];
  populares2:Movie[];
  popularesParaEnanos1:Movie[];
  popularesParaEnanos2:Movie[];
  peliculasEnCartelera1:Movie[];
  peliculasEnCartelera2:Movie[];

  constructor(private service:FilmsService, private router:Router) { }

  ngOnInit() {
    this.service.getPopulares().subscribe(data =>{
      if(data.results.length>6){
        this.populares1 = data.results.slice(0,3);
        this.populares2 = data.results.slice(3,6);
      }
      console.log(data);
    })
    this.service.getPopularesParaEnanos().subscribe(data =>{
      if(data.results.length>6){
        this.popularesParaEnanos1 = data.results.slice(0,3);
        this.popularesParaEnanos2 = data.results.slice(3,6);
      }
      console.log(data);
    })

    this.service.getPeliculasEnCartelera().subscribe(data =>{
      if(data.results.length>6){
        this.peliculasEnCartelera1 = data.results.slice(0,3);
        this.peliculasEnCartelera2 = data.results.slice(3,6);
      }
      console.log(data);

    })
  }

  getDetail(idx:number){
    this.router.navigate(['pelicula', idx, 'home']);
  }

}
