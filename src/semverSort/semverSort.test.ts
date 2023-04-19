import { semverSort } from "./semverSort";

describe("semverSort", () => {
  const arrays = [
      ["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"],
      ["55.0.5", "2.5", "0.12.0", "6", "3.23", "1.4.50", "1.4.5.6.7"],
      ["3.0.6", "3.0.7", "3.0.1"],
      ["2", "2.5", "0.1", "1", "23.45", "0.4.50", "4.5.6.7"],
    ],
    results = [
      ["0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0"],
      ["0.12.0", "1.4.5.6.7", "1.4.50", "2.5", "3.23", "6", "55.0.5"],
      ["3.0.1", "3.0.6", "3.0.7"],
      ["0.1", "0.4.50", "1", "2", "2.5", "4.5.6.7", "23.45"],
    ];

  it("is a function", () => {
    expect(semverSort).toBeInstanceOf(Function);
  });

  for (let i = 0; i < arrays.length; i += 1) {
    it(`Check the sort function of the version array for the array : ${arrays[i]}`, () => {
      expect(semverSort(arrays[i])).toEqual(results[i]);
    });
  }
});
