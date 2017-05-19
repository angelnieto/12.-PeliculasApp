import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FilmsService {

  private apikey:string = "fee6d145cefb66f45a841f69080895db";
  private urlMoviedb = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp) { }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

}
