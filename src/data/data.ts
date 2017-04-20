const titleStrings = [
  'This',
  'Is',
  'A',
  'Title'
];

interface ResultInterface {
  title: string
};

class Result implements ResultInterface {
  title: string;

  constructor( data? ) {
    this.title = ( titleStrings.reduce( ( string1: string, string2: string ) => { return `${string1} ${string2}`; } ) ); /// TEMP
  }
}

var resultObjects = [];

for ( let i = 0, x = 30; i < x; i++ ) {
    resultObjects.push( new Result() ); /// TEMP
}

export const Results = resultObjects;

export const ResultIds = Results.map( ( result: any ) => { return result.id } );
