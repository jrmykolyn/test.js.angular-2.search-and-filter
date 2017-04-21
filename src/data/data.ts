// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
import * as moment from 'moment';

const titleStrings = [
  'This',
  'Is',
  'A',
  'Title'
];

const typeObjects = [
  { name: 'All', value: null },
  { name: 'Article', value: 'article' },
  { name: 'Event', value: 'event' },
  { name: 'Place', value: 'place' }
];

const categoryObjects = [
  { name: 'All', value: null },
  { name: 'Politics', value: 'politics' },
  { name: 'Science and Technology', value: 'science-and-technology' },
  { name: 'Finance', value: 'finance' },
  { name: 'Sports', value: 'sports' }
];

const dateObjects = [
  { name: 'All Dates', value: null, matchType: 'range' },
  { name: 'Today', value: getTodayRange(), matchType: 'range' },
  { name: 'Tomorrow', value: getTomorrowRange(), matchType: 'range' },
  { name: 'This week', value: getThisWeekRange(), matchType: 'range' },
  { name: 'This weekend', value: getThisWeekendRange(), matchType: 'range' },
  { name: 'Later', value: getLaterRange(), matchType: 'range' }
];

function getTodayRange(): Array<number> {
  return [
    moment().startOf( 'day' ).unix(),
    moment().endOf( 'day' ).unix()
  ];
}

function getTomorrowRange(): Array<number> {
  const today = moment().day();
  const tomorrow = moment().day( today + 1 );

  return [
    tomorrow.startOf( 'day' ).unix(),
    tomorrow.endOf( 'day' ).unix()
  ];
}

function getThisWeekRange(): Array<number> {
  return [
    moment().startOf( 'week' ).unix(),
    moment().endOf( 'week' ).unix()
  ];
}

function getThisWeekendRange(): Array<number> {
  const sat = moment().day( 6 );
  const sun = moment().day( 7 );

  return [
    sat.startOf( 'day' ).unix(),
    sun.endOf( 'day' ).unix()
  ];
}

function getLaterRange(): Array<number> {
  var nextMonday = moment().day( 8 );
  var muchLater = moment().year( 9999 );

  return [
    nextMonday.startOf( 'day' ).unix(),
    muchLater.endOf( 'year' ).unix()
  ];
}

interface ResultInterface {
  title: string,
  type: any,
  category: any;
  date: any;
};

class Result implements ResultInterface {
  title: string;
  type: any;
  category: any;
  date: any;

  constructor( data? ) {
    this.title = ( titleStrings.reduce( ( string1: string, string2: string ) => { return `${string1} ${string2}`; } ) ); /// TEMP
    this.type = typeObjects[ Math.floor( Math.random() * typeObjects.length ) ];
    this.category = categoryObjects[ Math.floor( Math.random() * categoryObjects.length ) ];
    this.date = { value: new Date().getTime() };
  }
}

var resultObjects = [];

for ( let i = 0, x = 30; i < x; i++ ) {
    resultObjects.push( new Result() ); /// TEMP
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export const Types = typeObjects;

export const Categories = categoryObjects;

export const Dates = dateObjects;

export const Results = resultObjects;

export const ResultIds = Results.map( ( result: any ) => { return result.id } );
