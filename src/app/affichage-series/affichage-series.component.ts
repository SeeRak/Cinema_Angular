import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-affichage-series',
  templateUrl: './affichage-series.component.html',
  styleUrls: ['./affichage-series.component.css']
})
export class AffichageSeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor(private serieService : SerieService) { }

  ngOnInit(): void {
    this.serieService.getAll().subscribe(response => {
      this.series = response;
    })
    console.log(this.series)
  }

}
