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


describe("isSufficientPayment", () => {
  test("payment is greater than or equal to total", () => {
    expect(isSufficientPayment(5,6)).toEqual(true);
  });
});

describe("isSufficientPayment", () => {
  test("payment is greater than or equal to total", () => {
    expect(isSufficientPayment(10,7)).toEqual(false);
  });
});

describe("isSufficientPayment", () => {
  test("payment is greater than or equal to total", () => {
    expect(isSufficientPayment(3,3)).toEqual(true);
  });
});

describe("isSufficientPayment", () => {
  test("payment is greater than or equal to total", () => {
    expect(isSufficientPayment(15,12)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test("calculate price total in itemsArray", () => {
    expect
  });
});

describe("addItem", () => {
  test("add item to empty array", () => {
    const emptyArray = [];
    addItem(emptyArray,"Beans",3);
    expect(emptyArray).toEqual([{name:"Beans",price: 3}])
  });
});

describe("addItem", () => {
  test("add item to array with one item", () => {
    const itemsArray = [{name:"Beans",price: 3}];
    addItem(itemsArray,"Sugar",2);
    expect(itemsArray).toEqual([{name:"Beans",price: 3},{name:"Sugar", price: 2}])
  });
});

describe("addItem", () => {
  test("add item to array with two items", () => {
    const itemsArray = [{name:"Beans",price: 3},{name:"Sugar", price: 2}];
    addItem(itemsArray,"Coffee",4);
    expect(itemsArray).toEqual([{name:"Beans",price: 3},{name:"Sugar", price: 2},{name:"Coffee", price: 4}])
  });
});
describe("removeItem", () => {
  test.todo("add removeItem tests here");
})*/