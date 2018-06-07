const slugFormatter = require("../src/slugFormatter.js");

describe("Function slugFormatter(), creates a readable string representation to use as slug", () => {
  it("is a function", () => {
    expect(typeof slugFormatter).toBe("function");
  });

  it("and gets only strings as argument", () => {
    expect(() => {
      slugFormatter({ foo: "bar" });
    }).toThrowError("Invalid input");
  });

  it("and converts characters into lowercase", () => {
    expect(slugFormatter("Test")).toEqual("test");
  });

  it("and adds hyphens where there is spaces between words", () => {
    expect(slugFormatter(" replace my spaces ")).toBe("replace-my-spaces");
  });

  it("and removes special characters", () => {
    expect(slugFormatter("where-are-you?")).toBe("where-are-you");
  });
});
