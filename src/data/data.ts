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
  { name: 'All Dates', value: null },
  { name: 'Today', value: '/// TEMP' },
  { name: 'Tomorrow', value: '/// TEMP' },
  { name: 'This week', value: '/// TEMP' },
  { name: 'This weekend', value: '/// TEMP' },
  { name: 'This later', value: '/// TEMP' }
];

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
    this.date = new Date().getTime();
  }
}

var resultObjects = [];

for ( let i = 0, x = 30; i < x; i++ ) {
    resultObjects.push( new Result() ); /// TEMP
}

export const Types = typeObjects;

export const Categories = categoryObjects;

export const Dates = dateObjects;

export const Results = resultObjects;

export const ResultIds = Results.map( ( result: any ) => { return result.id } );
