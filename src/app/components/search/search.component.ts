import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private peliculas:Array<Movie> = [];
  private title:string;
  private buscarForm:NgForm;

  constructor(private service: FilmsService, private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      if(params['title']){
        this.title = params['title'];
        this.getPeliculas();
      }
    })
  }

  onEnter(buscarForm:NgForm){
    console.log(buscarForm);
    if(buscarForm.valid){
      this.getPeliculas();
    } else if(this.title == undefined){
      this.title = "";
    }
  }

  getPeliculas(){
    this.service.getPeliculas(this.title).subscribe(data =>{
      this.peliculas = data.results;
    })
  }

  getDetail(idx:number){
    this.router.navigate(['pelicula', idx, 'buscar', this.title]);
  }

}
