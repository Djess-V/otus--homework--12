import { summator } from "./summator";

describe("summator", () => {
  it("is a function", () => {
    expect(summator).toBeInstanceOf(Function);
  });

  it("Checking the summation function with the correct data", () => {
    const s = summator();

    expect(summator().toString()).toBe("0");
    expect(s(1).toString()).toBe("1");
    expect(s(1)(2).toString()).toBe("3");
    expect(s(3)(4)(5).toString()).toBe("12");

    const s3 = summator(3);

    expect(s3(5).toString()).toBe("8");
    expect(s3(6).toString()).toBe("9");
  });
});
