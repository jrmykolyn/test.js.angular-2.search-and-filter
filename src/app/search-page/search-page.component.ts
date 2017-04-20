import { Component, OnInit } from '@angular/core';

import { Categories, Results, ResultIds } from '../../data/data';


interface FilterCollectionInterface {
  name: string,
  niceName: string,
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
  filterSelections: any = {};

  constructor(
  ) { }

  ngOnInit() {
    this.results = Results;

    this.filterCollections = [
      {
        name: 'Category',
        niceName: 'category',
        type: 'select',
        options: Categories
      }
    ];
  }

  logSelections( data ) {
    console.log( 'INSIDE `SearchPageComponet#doLog`' ); /// TEMP
    console.log( data ); /// TEMP
    console.log( this.filterSelections );
  }

}
