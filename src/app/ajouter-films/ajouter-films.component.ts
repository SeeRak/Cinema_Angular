import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-ajouter-films',
  templateUrl: './ajouter-films.component.html',
  styleUrls: ['./ajouter-films.component.css']
})
export class AjouterFilmsComponent implements OnInit {
  
  nouveauFilm: FormGroup;
  
  constructor(private filmService : FilmService, private router : Router) { 
    this.nouveauFilm = new FormGroup ({
      titre : new FormControl(''),
      poster : new FormControl(''),
      trailer : new FormControl(''),
      synopsis : new FormControl(''),
      realisateur : new FormControl(''),
      realisation : new FormControl(''),
      duree : new FormControl(''),
      places : new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.filmService.create(this.nouveauFilm.value).subscribe(response => {
      console.log(this.nouveauFilm.value)
      this.router.navigate([''])
    })
  }
}
