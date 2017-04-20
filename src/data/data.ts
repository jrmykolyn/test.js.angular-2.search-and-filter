const titleStrings = [
  'This',
  'Is',
  'A',
  'Title'
];

const categoryObjects = [
  { name: 'All', value: 'all' },
  { name: 'Politics', value: 'politics' },
  { name: 'Science and Technology', value: 'science-and-technology' },
  { name: 'Finance', value: 'finance' },
  { name: 'Sports', value: 'sports' }
];

interface ResultInterface {
  title: string,
  category: any
};

class Result implements ResultInterface {
  title: string;
  category: any;

  constructor( data? ) {
    this.title = ( titleStrings.reduce( ( string1: string, string2: string ) => { return `${string1} ${string2}`; } ) ); /// TEMP
    this.category = categoryObjects[ Math.floor( Math.random() * categoryObjects.length ) ];
  }
}

var resultObjects = [];

for ( let i = 0, x = 30; i < x; i++ ) {
    resultObjects.push( new Result() ); /// TEMP
}

export const Categories = categoryObjects;

export const Results = resultObjects;

export const ResultIds = Results.map( ( result: any ) => { return result.id } );
