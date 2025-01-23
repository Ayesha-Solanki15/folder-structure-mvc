function sum(a, b) {
  return a + b;
}

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
// we need to give the name of each test and the function that will be executed

test("add 4 + 5 not equals to 12", () => {
  expect(sum(4, 5)).not.toBe(12);
});

// Both the above tests are for the same function, so we can group them together using describe. The no. of tests inside the group would be the same as before it just gives us a logical separation of tests.
describe("Summation tests", () => {
  test("add 1 + 2 to equal 3", () => {
    //assertion
    expect(sum(1, 2)).toBe(3);
  });

  // failure test
  test("add 4 + 5 not equals to 12", () => {
    expect(sum(4, 5)).not.toBe(12);
  });
});

// Jest Matchers
test("equality matchers", () => {
  expect(2 * 2).toBe(4);
  expect(4 - 2).not.toBe(1);
  var name = "Ayesha";
  var n = null;
  expect(n).toBeNull();
  expect(name).toBeTruthy();
  expect(0).toBeFalsy();
});

test("number matchers", () => {
  var n1 = 100;
  var n2 = -20;
  var n3 = 0;

  expect(n1).toBeGreaterThan(10);
  expect(n2).toBeLessThanOrEqual(0);
});

test("string matchers", () => {
  var string = "Hello";
  expect(string).toMatch(/ell/);
  expect(string).not.toMatch(/abc/);
});

//Jest - setup and teardown
// If we want some osrt of a prerequisite to be done before running the tests, or something should happen after all the tests are run.

describe("Hooks Testing", () => {
  var n1 = 2;
  var n2 = 3;
  beforeAll(() => {
    console.log("Before all tests");
  });
  afterAll(() => {
    console.log("After all tests");
  });
  beforeEach(() => {
    console.log("Before each test");
    n1 = 3;
    n2 = 4;
  });
  afterEach(() => {
    console.log("After each test");
  });
  test("add 3 + 4 to equal 7", () => {
    expect(sum(n1, n2)).toBe(7);
  });
  // only for this test beforeEach and afterEach will be called. If there were tests, then beforeEach and afterEach would have been called for each test.
});
