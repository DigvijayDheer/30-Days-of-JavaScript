class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.value -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value = Math.pow(this.value, value);
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}

// Example 1:
const calculator1 = new Calculator(10);
const result1 = calculator1.add(5).subtract(7).getResult();
console.log(result1);
// Output: 8

// Example 2:
const calculator2 = new Calculator(2);
const result2 = calculator2.multiply(5).power(2).getResult();
console.log(result2);
// Output: 100

// Example 3:
const calculator3 = new Calculator(20);
try {
  const result3 = calculator3.divide(0).getResult();
} catch (error) {
  console.error(error.message);
  // Output: Division by zero is not allowed
}
