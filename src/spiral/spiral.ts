interface Spiral {
  (arr: number[][]): number[];
}

export const spiral: Spiral = (arr) => {
  const array: number[][] = [];

  for (const item of arr) {
    array.push([...item]);
  }

  const result: number[] = [];

  for (const item of array[0]) {
    result.push(item);
  }

  array.splice(0, 1);

  if (array.length > 1) {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i].length > 0 && array[i][array[i].length - 1]) {
        result.push(array[i][array[i].length - 1]);
        array[i].splice(array[i].length - 1, 1);
      }
    }
  }

  if (array.length === 0) {
    return result;
  }

  for (let i = array[array.length - 1].length - 1; i >= 0; i -= 1) {
    if (array[array.length - 1][i]) {
      result.push(array[array.length - 1][i]);
    }
  }

  array.splice(array.length - 1, 1);

  if (array.length > 1) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      if (array[i][0]) {
        result.push(array[i][0]);
        array[i].splice(0, 1);
      }
    }
  }

  if (array.length === 0) {
    return result;
  }

  return [...result, ...spiral(array)];
};
