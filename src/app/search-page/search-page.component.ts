import { Component, OnInit } from '@angular/core';

import { Results, ResultIds } from '../../data/data';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  results: Array<any> = [];

  constructor(
  ) { }

  ngOnInit() {
    this.results = Results;
  }

}
