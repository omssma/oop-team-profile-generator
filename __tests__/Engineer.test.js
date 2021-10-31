const Engineer = require("../lib/Engineer");


// Jest test to test the value of github
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Noor", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

// Jest test to test the value of role
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Noor", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

// Jest test to test the value of github
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Noor", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});