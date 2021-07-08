import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-savoir-plus-serie',
  templateUrl: './savoir-plus-serie.component.html',
  styleUrls: ['./savoir-plus-serie.component.css']
})
export class SavoirPlusSerieComponent implements OnInit {

  serie: Serie;
  id: number;

  constructor(private serieService : SerieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => 
      this.serieService.getId(+param['id']+1).subscribe(res => 
        this.serie=res))
  }

}
