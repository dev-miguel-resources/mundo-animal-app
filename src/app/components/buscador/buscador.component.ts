import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../servicios/animales.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  animales: any[] = [];
  termino: string;

  // tslint:disable-next-line: variable-name
  constructor(private activatedRoute: ActivatedRoute, private _animalesService: AnimalesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
        // console.log(params['termino']);
        // tslint:disable-next-line: no-string-literal
        this.termino = params['termino'];
        // tslint:disable-next-line: no-string-literal
        this.animales = this._animalesService.buscarAnimales(params['termino']);
        console.log(this.animales);
    });
  }
}
