const Intern = require("../lib/Intern");


// Jest test to test the value of school
test("Can set school via constructor", () => {
  const testValue = "GWU";
  const e = new Intern("Noor", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

// Jest test to tes the value of role
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Noor", 1, "test@test.com", "GWU");
  expect(e.getRole()).toBe(testValue);
});

// Jest test to test the value of school
test("Can get school via getSchool()", () => {
  const testValue = "GWU";
  const e = new Intern("Noor", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});