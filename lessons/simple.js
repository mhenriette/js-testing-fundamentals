const { sum, subtract, sumAsync, subtractAsync } = require("../math");

// here we are going to write  automated  test for sum and substract methods to an error when something unexpected happens

// sum test
test("sum test", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

// test for substract
test("subtract", () => {
  const result = subtract(5, 5);
  expect(result).toBe(0);
});

// asynchronous sum test
test("asynchronous sum", async () => {
  const result = await sumAsync(5, 5);
  expect(result).toBe(10);
});

// asynchronous subtract test

test("Asynchronous subtract", async()=>{
  const result = await subtractAsync(5, 5)
  expect(result).toBe(0)
})

// Testing function
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
  }
}

// Assertion method
function expect(result) {
  return {
    toBe(expect) {
      if (result !== expect)
        throw new Error(`${result} is not equal to ${expect}}`);
    },
  };
}
