describe("formatCurrency", () => {
  test("format amount to dollar amount",() => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
});

describe("formatCurrency", () => {
  test("format amount to dollar amount",() => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(63.4567)).toEqual("$63.46");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });
});

describe("formatCurrency", () => {
  test("format amount to currency",() => {
    expect(formatCurrency(-127.3778)).toEqual("-$127.38");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});