import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from "./basicOperations"

describe('Mocked complexOperation', () => {
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Test providing not a string for email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail(1234)).toStrictEqual('The email should be a string');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });
        it('Test providing an empty string as input for email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });
        it('Test providing a string that is not a valid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('micaela')).toBe('The email is invalid');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });
        it('Test providing an invalid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });
        it('Test providing a valid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('test@radiumrocket.com')).toBe('The email is valid');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });
    });
    describe('calculateArea', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Testing a non-supported figure', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            expect(complexOperations.calculateArea('pentagon')).toBe('pentagon is not supported')
            expect('isSupportedFigure').toBeCalled;
        });
        it('Test providing invalid imputs for number1 and number2', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea('rectangle', '', 'undefined')).toBe('number1 and number2 should be numbers')
            expect(complexOperations.calculateArea('square', 'two', 'two')).toBe('number1 and number2 should be numbers')
            expect('isSupportedFigure').toBeCalled;
            expect('isNumber').toBeCalled;
        });
        it('Test providing valid inputs for number1 and number2(mocked)', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(50);
            jest.spyOn(basicOperations, 'division').mockReturnValue(4);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(2);
            expect(complexOperations.calculateArea('square', 9, 9)).toEqual(50)
            expect(complexOperations.calculateArea('rectangle', 7,5)).toEqual(50)
            expect(complexOperations.calculateArea('triangle', 7,3)).toBe(4)
            expect(complexOperations.calculateArea('circle', 9)).toBeCloseTo(6.2831)
            expect('isSupportedFigure').toBeCalled;
            expect('isNumber').toBeCalled;
        });
    });
    describe('sumGreaterThan', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Testing with params that are not numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan('a,b,c')).toBe('The params should be numbers')
            expect('isNumber').toBeCalled;
        });
        it('Testing with params that are not numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan('undefined', 1,2)).toBe('The params should be numbers')
            expect('isNumber').toBeCalled;
        });
        it('Sum number1 plus number2 mocked to return 100,should be greater than number3', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
            expect(complexOperations.sumGreaterThan(50,20, 10)).toBe('100 is greater than 10')
            expect('isNumber').toBeCalled;
        });
        it('Sum number1 plus number2 mocked to return 100,should be less than number3', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
            expect(complexOperations.sumGreaterThan(50,20, 110)).toBe('100 is less than 110')
            expect('isNumber').toBeCalled;
        });
    });
    describe('intersectionBetweenArrays', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Testing intersectionBetweenArrays providing an invalid param(not an array)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays('one', 'two')).toBe('The params should be arrays')
            expect('isArray').toBeCalled;
        });
        it('Test providing an empty array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual(false)
            expect('isArray').toBeCalled;
        });
        it('Test providing undefined values', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('There are not matching elements');
            expect(complexOperations.intersectionBetweenArrays([undefined],['one'])).toBe('There are not matching elements')
            expect('isArray').toBeCalled;
        });
        it('Tests providing  a valid instersection array, (Mocked to return /mockedIntersection/)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('mockedIntersection');
            expect(complexOperations.intersectionBetweenArrays([1,2,3], [4,5,6])).toEqual('mockedIntersection')
            expect('isArray').toBeCalled;
        });
    });
    describe('sortArrayOfObjectsByKey', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Testing sortArrayOfObjectsByKey providing an invalid param(not an array)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey('word', 'name')).toBe('The first param should be an array')
            expect('isArray').toBeCalled;
        });
        it('Testing sortArrayOfObjectsByKey providing an invalid second param(not a string)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Radium'}, {name:'Rocket'}], 3)).toBe('The second param should be a string')
            expect('isArray').toBeCalled;
            expect('isString').toBeCalled;
        });
        it('Testing sortArrayOfObjectsByKey sorting by age', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Marie', age: '28'}, {name: 'Amy', age: '25'}], 'age')).toEqual([{"name": 'Amy', "age": '25'}, {"name": 'Marie', "age": '28'}]);
        });
        it('Testing sortArrayOfObjectsByKey with some elements in the array that do not have the key property', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Marie'}, {name:'Amy'}, {city: 'Paris'}], 'name')).toEqual('Some elements in the array do not have the name property');
        });
        describe('numberOfOddAndEvenNumbers', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Testing numberOfOddAndEvenNumbers providing an invalid param(not an array)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers('["1, 2, 3, 4, 5"]')).toBe('The param should be an array');
        });
        it('Testing numberOfOddAndEvenNumbers providing an invalid param(not only numbers)', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d'])).toBe('The array should have only numbers')
        });
        it('Testing numberOfOddAndEvenNumbers with valid param', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4])).toEqual({even: 2 , odd: 2});
        });
        it('Testing numberOfOddAndEvenNumbers with array mocked', () => {
            jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
            jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
            jest.spyOn(basicOperations, "getOddNumbersFromArray").mockReturnValue([1,3]);
            jest.spyOn(basicOperations, "getEvenNumbersFromArray").mockReturnValue([2,4]);
            expect(complexOperations.numberOfOddAndEvenNumbers([1,3,5,7,9])).toEqual({even: 2 , odd: 2});
        });
    });
});
});