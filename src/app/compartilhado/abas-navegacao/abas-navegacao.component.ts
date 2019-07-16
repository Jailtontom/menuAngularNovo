import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abas-navegacao-c',
  templateUrl: './abas-navegacao.component.html',
  styleUrls: ['./abas-navegacao.component.css']
})
export class AbasNavegacaoCComponent implements OnInit {

  @Input() label = '';

  constructor() { }

  ngOnInit() {
  }

}
