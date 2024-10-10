// Write a function that returns true or false depending on whether its input integer is a leap year or not.
//
// A leap year is defined as one that is divisible by 4, but is not otherwise divisible by 100 unless it is also
// divisible by 400.
//
// For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year
// and 2000 is an atypical leap year.

function calculator(year: number) {
    function isTypicalLeapYear() {
        return year % 4 == 0;
    }

    if (isTypicalLeapYear()) {
        return true;
    }

    return false;
}

describe('Leap Year Calculator', () => {
    describe('Typical Leap Years', () => {
        it('should be true the year 4', () => {
            expect(calculator(4)).toBeTruthy()
        });

        it('should be true for the year 8', () => {
            expect(calculator(8)).toBeTruthy()
        });

        it('should be true for the year 1996', () => {
            expect(calculator(1996)).toBeTruthy()
        });
    });

    it('should be false for the year 3', () => {
        expect(calculator(3)).toBeFalsy()
    });

});