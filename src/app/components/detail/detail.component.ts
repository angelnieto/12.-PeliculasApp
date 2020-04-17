import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  movie:Movie;

  constructor(private activatedRoute:ActivatedRoute , service: FilmsService){
    this.activatedRoute.params.subscribe(params =>{
      console.log( params['id'] + " , " + params['origin']);
      this.movie = service.getPelicula(params['id']);
    })
  }

  ngOnInit(){ }
}
