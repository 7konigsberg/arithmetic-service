const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
})

test('205 + 100 is equal to 305', () => {
    expect(add(205,100)).toBe(305);
})

test('100 + 3 is equal to 3', () => {
    expect(add(100,3)).toBe(103);
})
