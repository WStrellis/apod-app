import { nextDay, prevDay, randomDayBetween } from './date_funcs'

/*
1.What is the unit under test (module, function, class, whatever)?
2.What should it do? (Prose description)
3.What was the actual output?
4.What was the expected output?
5.If the test fails, how do you reproduce the failure?
*/

describe('nextDay()', function () {
  test(`When given the date 'January 1 , 2019 00:00:00' it should return 'January 2, 2019 00:00:00'`, () => {
    const actual = nextDay((new Date('January 1, 2019 00:00:00')), 1)
    const expected = new Date('January 2, 2019 00:00:00')
    
    expect(actual).toEqual(expected); 
  }); 
});

describe('prevDay()', function () {
  test(`When given the date 'January 2 , 2019 00:00:00' it should return 'January 1, 2019 00:00:00'`, () => {
    const actual = prevDay((new Date('January 2, 2019 00:00:00')), 1)
    const expected = new Date('January 1, 2019 00:00:00')
    
    expect(actual).toEqual(expected); 
  }); 
});

describe('randomDayBetween()', function () {
  test(`When given an 'earliest' date of 'January 1 , 2019 00:00:00' and a 'latest'
   date of 'January 2, 2019 00:00:00' it should return 'January 1, 2019 00:00:00'`, () => {
    const actual = randomDayBetween((new Date('January 1, 2019 00:00:00')), (new Date('January 2, 2019 00:00:00')))
    const expected = new Date('January 1, 2019 00:00:00')
    
    expect(actual).toEqual(expected); 
  }); 

    test(`When given an 'earliest' date of 'January 1 , 2019 00:00:00' and a 
    'latest' date of 'January 4, 2019 00:00:00' it should return a date which is 
    one of : 'January [ 1, 2, 3 ] 2019 00:00:00' ` , () => {
    const actual = randomDayBetween((new Date('January 1, 2019 00:00:00')), (new Date('January 4, 2019 00:00:00')))
    const expectedPossibleDates = [(new Date('January 1, 2019 00:00:00')),(new Date('January 2, 2019 00:00:00')),(new Date('January 3, 2019 00:00:00'))]
    console.log('Date return by randomDayBetween: ' ,actual.toDateString());
    expect(expectedPossibleDates).toContainEqual(actual); 
  }); 

});
