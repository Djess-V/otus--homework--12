interface F2 {
  (num2?: number): F2;
}

interface F1 {
  (num2?: number): F2;
}

interface Summator {
  (initValue?: number): F1;
}

export const summator: Summator = (initValue = 0) => {
  const result1: number = initValue;

  Function.prototype.toString = () => String(result1);

  return function f1(num1 = 0) {
    let result2: number = result1;
    result2 += num1;

    Function.prototype.toString = () => String(result2);

    return function f2(num2 = 0) {
      result2 += num2;

      return f2;
    };
  };
};
