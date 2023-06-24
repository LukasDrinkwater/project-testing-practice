const {
  capitalise,
  reverseString,
  Calc,
  caesarCipher,
  analyseArray,
} = require("./index");

describe("my stack", () => {
  it("capitalise works", () => {
    expect(capitalise("test")).toBe("Test");
  });

  it("reverse string works", () => {
    expect(reverseString("test")).toBe("tset");
  });

  it("test calc class", () => {
    const calc = new Calc();

    expect(calc.add(1, 1)).toBe(2);
    expect(calc.subtract(2, 1)).toBe(1);
    expect(calc.divide(10, 5)).toBe(2);
    expect(calc.multiply(3, 5)).toBe(15);
  });

  it("test cihper", () => {
    expect(caesarCipher("test", 0)).toBe("uftu");
    expect(caesarCipher("test!", 0)).toBe("uftu!");
  });

  it("test analyseArray", () => {
    const testOjbect = {
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    };

    expect(analyseArray([1, 2, 3, 4, 5])).toMatchObject;
  });
});

// describe("my stack", () => {
//   let stack;

//   beforeEach(() => {
//     stack = new Stack();
//   });

//   it("is created empty", () => {
//     expect(stack.top).toBe(-1);
//     expect(stack.items).toEqual({});
//   });

//   it("can push to the top", () => {
//     stack.push("testpush");

//     expect(stack.top).toBe(0);
//     expect(stack.peek).toBe("testpush");
//   });

//   it.todo("can pop off");
// });
