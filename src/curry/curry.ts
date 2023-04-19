type Func = (
  a?: number,
  b?: number,
  c?: number,
  d?: number,
  e?: number
) => number;

export function curry(cb: Func) {
  let array: number[] = [];

  return function f(...args: number[]) {
    let result: number[] = [];
    if (args.length === 5) {
      return cb(...args);
    }

    for (const item of args) {
      array.push(item);
    }

    if (array.length === 5) {
      result = [...array];
      array = [];
      return cb(...result);
    }

    return f;
  };
}
