const fileIndex = require('./index');

test('count string.length is >= 1 and string.length <= 10', () => {
    expect(fileIndex.StringLength('abcd')).toBeGreaterThanOrEqual(1)
    expect(fileIndex.StringLength('abcd')).toBeLessThanOrEqual(10)
});

test('Reverse string', () => { 
    expect(fileIndex.ReverseString('abcd'))
})

describe('Calculator', () => { 
    
    test('add', () => { 
        expect(fileIndex.Calculator.add(2,2)).toBe(4)
    })

    test('subtract', () => { 
        expect(fileIndex.Calculator.subtract(2,2)).toBe(0)
    })
    test('multiply', () => { 
        expect(fileIndex.Calculator.multiply(2,2)).toBe(4)
    })
})

test('first character capitalized', () => { 
    expect(fileIndex.Capitalize('huzaifa'))
})