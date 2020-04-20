import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie.model';

@Pipe({
  name: 'peliculasImagen'
})
export class PeliculasImagenPipe implements PipeTransform {

  transform(pelicula: Movie): any {
    if(pelicula.backdrop_path){
      return "https://image.tmdb.org/t/p/w500" + pelicula.backdrop_path;
    } else if(pelicula.poster_path){
      return "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    }
    return "../../../assets/default.webp";
  }

}
