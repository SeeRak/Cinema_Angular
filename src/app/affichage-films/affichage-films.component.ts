import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import {DialogModule} from 'primeng/dialog'


@Component({
  selector: 'app-affichage-films',
  templateUrl: './affichage-films.component.html',
  styleUrls: ['./affichage-films.component.css']
})
export class AffichageFilmsComponent implements OnInit {

  display: boolean = false;
  films: Film[] = [];

  constructor(private filmService : FilmService) { }

  ngOnInit(): void {
    this.filmService.getAll().subscribe(response => {
      this.films = response;
    })
    console.log(this.films)
    
  }

  /*showDialog() {
    this.display = true;
  }*/
}
