const calculateChange = require("../src/js/cart-functions");

  describe("calculateChange", () => {
  test("calculate difference between payment and total", () => {
    expect(calculateChange(5,6)).toEqual(1);
  });
});

describe("calculateChange", () => {
  test("calculate difference between payment and total", () => {
    expect(calculateChange(12.30,13.03)).toEqual(0.73);
  });
});

describe("calculateChange", () => {
  test("calculate difference between payment and total", () => {
    expect(calculateChange(9,12)).toEqual(3);
  });
});


/*describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
})*/