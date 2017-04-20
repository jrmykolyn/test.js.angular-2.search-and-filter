import { Component, OnInit } from '@angular/core';

import { Categories, Results, ResultIds } from '../../data/data';


interface FilterCollectionInterface {
  name: string,
  type: string,
  options: Array<FilterOptionInterface>
}

interface FilterOptionInterface {
  name: string,
  value: any
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  results: Array<any> = [];

  filterCollections: Array<FilterCollectionInterface>

  constructor(
  ) { }

  ngOnInit() {
    this.results = Results;

    this.filterCollections = [
      {
        name: 'Test Filter Collection',
        type: 'select',
        options: Categories
      }
    ];
  }

}
