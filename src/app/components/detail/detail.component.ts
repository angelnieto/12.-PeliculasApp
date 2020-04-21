import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  movie:Movie;
  origin:string;
  searchValue:string;

  constructor(private activatedRoute:ActivatedRoute, private service: FilmsService, private router:Router){
    this.activatedRoute.params.subscribe(params =>{
      this.origin = params['origin'];
      this.searchValue = params['title'];
      service.getPelicula(params['id']).subscribe( pelicula =>{
        this.movie = pelicula;
      });
    })
  }

  ngOnInit(){ }

  back(){
    if(this.searchValue){
          this.router.navigate([ this.origin, this.searchValue ]);
    } else {
      this.router.navigate([ this.origin ]);
    }

  }
}
