describe("sanity js", function() {
  it("2 equals 2", function() {
    expect(2).toEqual(2);
  });

  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
}); 