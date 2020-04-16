import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  populares1:any[]=[];
  populares2:any[]=[];
  popularesParaEnanos1:any[]=[];
  popularesParaEnanos2:any[]=[];
  peliculasEnCartelera1:any[]=[];
  peliculasEnCartelera2:any[]=[];

  constructor(private service:FilmsService) { }

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

}
