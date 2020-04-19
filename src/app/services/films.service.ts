import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';
import { Movie } from '../model/movie.model'

@Injectable()
export class FilmsService {

  private apikey:string = "fee6d145cefb66f45a841f69080895db";
  private urlMoviedb = "https://api.themoviedb.org/3";
  private peliculas:Array<Movie> = [];

  constructor(private jsonp:Jsonp) { }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es-ES&certification.gte=NC-17&certification_country=US&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => {
      this.setPeliculas(resp);
      return resp.json()
    });
  }

  getPopularesParaEnanos(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es-ES&certification.lte=G&certification_country=US&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => {
      this.setPeliculas(resp);
      return resp.json()
    });
  }

  getPeliculasEnCartelera(){
    let date = new Date();
    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let startDate = date.toLocaleDateString("zh-Hans-CN", options).replace(/\//g,'-');
    console.log("startDate: "+startDate);
    date.setDate(date.getDate() + 7);
    let endDate = date.toLocaleDateString("zh-Hans-CN", options).replace(/\//g,'-');
      console.log("endDate: "+endDate);
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ startDate }&primary_release_date.lte=${ endDate }&api_key=${ this.apikey }&language=es-ES&callback=JSONP_CALLBACK`;
    console.log("url: "+url);
    return this.jsonp.get(url).map(resp => {
      this.setPeliculas(resp);
      return resp.json()
    });
  }

  setPeliculas(response:any){
    for(let i=0 ; i < response.json().results.length ; i++){
      let alreadyInArray = false;
      for(let j=0 ; j < this.peliculas.length ; j++){
        if(this.peliculas[j].id == response.json().results[i].id){
          alreadyInArray = true;
        }
      }
      if(!alreadyInArray){
        this.peliculas.push(response.json().results[i]);
      }

    }
  }

  getPelicula(idx:number){
    let movie:Movie;
    for(let j=0 ; j < this.peliculas.length ; j++){
      if(this.peliculas[j].id == idx){
        movie = this.peliculas[j];
      }
    }
    return movie;
  }

  getPeliculas(value:string){
      let url = `${ this.urlMoviedb }/search/movie?sort_by=popularity.asc&api_key=${ this.apikey }&language=es-ES&include_adult=true&query=${value}&callback=JSONP_CALLBACK`;
      return this.jsonp.get(url).map(resp => {
            return resp.json()
      });
  }

}
