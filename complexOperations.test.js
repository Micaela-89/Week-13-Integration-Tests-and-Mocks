import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('Test validation of email(string)', () => {
      expect(complexOperations.checkEmail(1234)).toBe('The email should be a string');
      expect(complexOperations.checkEmail()).toEqual('The email should be a string');
    });
    it('Test providing a string that is not a valid email', () => {
      expect(complexOperations.checkEmail('micaela')).toBe('The email is invalid');
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
      expect(complexOperations.checkEmail('test@test')).toEqual('The email is invalid');
    });
    it('Test sending a valid email)', () => {
      expect(complexOperations.checkEmail('test@radiumrocket.com')).toBe('The email is valid');
    })
  });
  describe('calculateArea', () => {
    it('Testing non-supported figures', () => {
      expect(complexOperations.calculateArea('figure', 1, 2)).toBe('figure is not supported');
      expect(complexOperations.calculateArea('pentagon', 5, 2)).toBe('pentagon is not supported');
    });
    it('Testing invalid inputs for number1 and number2', () => {
      expect(complexOperations.calculateArea('square', 'two', 'two')).toBe('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('rectangle', '', 'undefined')).toBe('number1 and number2 should be numbers')
    });
    it('Testing square with valid inputs', () => {
      expect(complexOperations.calculateArea('square', 8, 8)).toBe(64);
    });
    it('Testing rectangle with valid inputs', () => {
      expect(complexOperations.calculateArea('rectangle', 4, 9)).toBe(36);
    });
    it('Testing triangle with valid inputs', () => {
      expect(complexOperations.calculateArea('triangle', 4, 8)).toBe(16);
    });
    it('Testing circle with valid input', () => {
      expect(complexOperations.calculateArea('circle', 2)).toBeCloseTo(12.5663);
    });
  });
  describe('sumGreaterThan', () => {
      it('Testing with params that are not numbers', () => {
        expect(complexOperations.sumGreaterThan('one', 2, 3)).toBe('The params should be numbers');
        expect(complexOperations.sumGreaterThan('a,b,c')).toBe('The params should be numbers');
        expect(complexOperations.sumGreaterThan('one', 'two', 'three')).toBe('The params should be numbers');
        expect(complexOperations.sumGreaterThan('undefined',2,3)).toBe('The params should be numbers');
        expect(complexOperations.sumGreaterThan({})).toBe('The params should be numbers');
        expect(complexOperations.sumGreaterThan([])).toBe('The params should be numbers');
      });
      it('number1 plus number2 should be equal to 11, and greater than number3', () => {
        expect(complexOperations.sumGreaterThan(5, 6, 7)).toBe('11 is greater than 7');
      });
      it('number1 plus number2 should be equal to 11, and less than number3 ', () => {
        expect(complexOperations.sumGreaterThan(5, 6, 20)).toBe('11 is less than 20');
      });
    });
  describe('intersectionBetweenArrays', () => {
    it('Testing intersectionBetweenArrays providing an invalid param(not an array)', () => {
      expect(complexOperations.intersectionBetweenArrays(1, 2)).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays(['one', 'two'], 'three')).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays(undefined,[1])).toEqual('The params should be arrays');
    });
    it('Test providing not matching elements', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3],[4,5,6])).toEqual('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays([1,2],['three'])).toEqual('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays([], [])).toBe('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays([undefined], ['one'])).toBe('There are not matching elements')
    });
    it('Test providing a valid instersection array', () => {
      expect(complexOperations.intersectionBetweenArrays(['apple','orange','grapes'], ['strawberry','orange', 'banana'])).toEqual(['orange']);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [4,5,6,7])).toEqual([4])
    });
  });
  describe('sortArrayOfObjectsByKey', () => {
    it('Testing sortArrayOfObjectsByKey providing an invalid param(not an array)', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('word', 'name')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'name')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey(10,'name')).toEqual('The first param should be an array');
    });
    it('Testing sortArrayOfObjectsByKey providing an invalid second param(not a string)', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Radium'}, {name:'Rocket'}], 3)).toEqual('The second param should be a string');
    });
    it('Testing sortArrayOfObjectsByKey with some elements in the array that do not have the key property', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Marie'}, {name:'Amy'}, {city: 'Paris'}], 'name')).toEqual('Some elements in the array do not have the name property');
    });
    it('Testing sortArrayOfObjectsByKey sorting by age', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Marie', age: '28'}, {name: 'Amy', age: '25'}], 'age')).toEqual([{"name": 'Amy', "age": '25'}, {"name": 'Marie', "age": '28'}]);
    });
    it('Testing sortArrayOfObjectsByKey with same values in two different elements of the array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ year: 1989 }, { year: 1990 }, { year: 1990 }], "year")).toEqual(  [{"year": 1989}, {"year": 1990}, {"year": 1990}]);
  });
  describe('numberOfOddAndEvenNumbers', () => {
    it('Testing numberOfOddAndEvenNumbers providing an invalid param(not an array)', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(10)).toBe('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
    });
    it('Testing numberOfOddAndEvenNumbers providing an invalid param(not only numbers)', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 'four'])).toEqual('The array should have only numbers');
      expect(complexOperations.numberOfOddAndEvenNumbers([undefined,1,'nombre','edad'])).toEqual('The array should have only numbers');
    });
    it('Testing numberOfOddAndEvenNumbers with valid param', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual({even: 3, odd: 3});
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,5,7])).toEqual({even: 0 , odd: 4});
    });
  });
});
});