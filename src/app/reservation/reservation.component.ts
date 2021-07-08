import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';
import {Router} from "@angular/router"
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  reservation : FormGroup;
  film: Film;
  id: number;
  newPlaces: number;

  constructor(private filmService : FilmService, private route: ActivatedRoute, private router: Router) {
    this.reservation = new FormGroup({
      nombreTickets : new FormControl('')
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe(param => 
      this.filmService.getId(+param['id']+1).subscribe(res => 
        this.film=res))
 }


 reserver(){
   if(confirm("Voulez-vous réserver cette séance ?")){
    this.router.navigate(['/affichageFilms']);
   }

 }

}
