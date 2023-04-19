import { spiral } from "./spiral";

describe("spiral", () => {
  const matrixes = [
      [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
      ],
      [
        [2, 3, 4],
        [5, 6, 9],
        [10, 12, 13],
      ],
      [[2]],
      [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39, 40, 41],
        [42, 43, 44, 45, 46, 47, 48],
      ],
    ],
    matrixesResult = [
      [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11],
      [2, 3, 4, 9, 13, 12, 10, 5, 6],
      [2],
      [
        0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 42, 35,
        28, 21, 14, 7, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 36, 29, 22,
        15, 16, 17, 18, 25, 32, 31, 30, 23, 24,
      ],
    ],
    arrDiffLen = [
      [[0, 1, 2], [], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20]],
      [[], [], []],
      [[0], [5, 6, 7], [], [15, 16, 17, 18, 19]],
      [[3, 4], [5, 6, 9], [10, 11, 12, 13], []],
    ],
    arrDiffLenResult = [
      [0, 1, 2, 14, 20, 19, 18, 17, 16, 15, 10, 13, 12, 11],
      [],
      [0, 7, 19, 18, 17, 16, 15, 5, 6],
      [3, 4, 9, 13, 10, 5, 6, 12, 11],
    ];

  it("is a function", () => {
    expect(spiral).toBeInstanceOf(Function);
  });

  it("Checking the spiral function with the correct data", () => {
    for (let i = 0; i < matrixes.length; i += 1) {
      expect(spiral(matrixes[i])).toEqual(matrixesResult[i]);
    }
  });

  it("Checking the spiral function with arrays of different lengths", () => {
    for (let i = 0; i < arrDiffLen.length; i += 1) {
      expect(spiral(arrDiffLen[i])).toEqual(arrDiffLenResult[i]);
    }
  });
});
