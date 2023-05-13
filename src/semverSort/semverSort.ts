interface Check {
  (a: string, b: string, step: number): 0 | 1 | -1;
}

const check: Check = (a, b, step) => {
  const arr1 = a.split("."),
    arr2 = b.split(".");

  let curA: number, curB: number, prevA: number, prevB: number;

  if (arr1[step] && arr2[step]) {
    curA = Number(arr1[step]);
    curB = Number(arr2[step]);

    if (step === 0) {
      if (curA > curB) {
        return 1;
      } else if (curA < curB) {
        return -1;
      } else {
        return 0;
      }
    } else {
      prevA = Number(arr1[step - 1]);
      prevB = Number(arr2[step - 1]);

      if (prevA === prevB) {
        if (curA > curB) {
          return 1;
        } else if (curA < curB) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
  } else {
    if (!arr1[step] && arr2[step] && arr1[step - 1] === arr2[step - 1]) {
      return -1;
    }
    return 0;
  }
};

interface SemverSort {
  (array: string[]): string[];
}

const semverSort: SemverSort = (array) => {
  let maxLen = 0;

  for (const item of array) {
    const arr = item.split(".");
    if (arr.length > maxLen) {
      maxLen = arr.length;
    }
  }

  let sortArray = [...array];

  for (let step = 0; step < maxLen; step += 1) {
    sortArray = sortArray.sort((a, b) => check(a, b, step));
  }

  return sortArray;
};

export { semverSort };
