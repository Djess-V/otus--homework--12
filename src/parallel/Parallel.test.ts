import Parallel from "./Parallel";

describe("Parallel", () => {
  it("is a function", () => {
    expect(Parallel).toBeInstanceOf(Function);
  });

  it("Checking a class to create 2 threads", async () => {
    const runner = new Parallel(2),
      result = await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5))
      );

    expect(result).toEqual([1, 3, 2, 5, 4]);
  });

  it("Checking a class to create 3 threads", async () => {
    const runner = new Parallel(3),
      result = await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
        () => new Promise((resolve) => setTimeout(resolve, 40, 6)),
        () => new Promise((resolve) => setTimeout(resolve, 70, 7))
      );

    expect(result).toEqual([1, 3, 2, 5, 6, 4, 7]);
  });

  it("Checking a class to create 5 threads", async () => {
    const runner = new Parallel(5),
      result = await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
        () => new Promise((resolve) => setTimeout(resolve, 40, 6)),
        () => new Promise((resolve) => setTimeout(resolve, 70, 7))
      );

    expect(result).toEqual([1, 3, 5, 2, 6, 4, 7]);
  });
});
