import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-savoir-plus',
  templateUrl: './savoir-plus.component.html',
  styleUrls: ['./savoir-plus.component.css']
})
export class SavoirPlusComponent implements OnInit {

  film: Film;
  id: number;

  constructor(private filmService : FilmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => 
      this.filmService.getId(+param['id']+1).subscribe(res => 
        this.film=res))

    // this.filmService.getId(this.id).subscribe(response => {
    //   this.film = response;
    // })
    //console.log(this.film);
  }
}
