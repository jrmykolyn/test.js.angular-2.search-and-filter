import { Component, OnInit } from '@angular/core';

import { Types, Categories, Dates, Results, ResultIds } from '../../data/data';


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
  activeResults: Array<any> = [];

  filterCollections: Array<FilterCollectionInterface>
  filterSelections: any = {};

  constructor(

  ) { }

  ngOnInit() {
    this.results = Results;
    this.activeResults = this.results;

    this.filterCollections = [
      {
        name: 'Type',
        niceName: 'type',
        type: 'select',
        options: Types
      },
      {
        name: 'Category',
        niceName: 'category',
        type: 'select',
        options: Categories
      },
      {
        name: 'Date',
        niceName: 'date',
        type: 'select',
        options: Dates
      }
    ];
  }

  applyFilters( data ) {
    console.log( 'LOGGING OUT `SearchPageComponent#filterSelections`' ); /// TEMP
    console.log( this.filterSelections ); /// TEMP

    this.activeResults = this.results.filter( ( result ) => {
        return Object
          .keys( this.filterSelections )
          .map( ( filter ) => {
            if ( !result[ filter ] || !this.filterSelections[ filter ].value ) {

              return true;

            } else {

              let matchType = this.filterSelections[ filter ].matchType;
              let filterValue = this.filterSelections[ filter ].value;
              let resultValue = result[ filter ].value;

              // CHECK `matchType`
              switch ( matchType ) {
                case 'range':
                  return ( resultValue >= filterValue[ 0 ] && resultValue <= filterValue[ 1 ] );

                  // break;
                default:
                  return resultValue === filterValue;
              }

            }
          } )
          .every( ( val ) => { return val === true; } );
      } );
  }

}
