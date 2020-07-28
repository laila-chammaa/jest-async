//for tests, we're using mock functions as to not hit the API
//jest.mock("./http");

//going one level higher and mocking axios instead
//jest automatically uses mocks of global node modules, no need to instruct it
//jest.mock("./axios");

const { loadTitle } = require("./util");

test("should print an uppercase text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});
