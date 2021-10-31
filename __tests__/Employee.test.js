const Employee = require("../lib/Employee");

// Create Jest test for employee
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

// Jest test for name
test("Can set name via constructor arguments", () => {
  const name = "Omar";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// Jest test for ID number
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Noor", testValue);
  expect(e.id).toBe(testValue);
});

// Jest test for email address
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Noor", 1, testValue);
  expect(e.email).toBe(testValue);
});

// Jest test to test the value of name
test("Can get name via getName()", () => {
  const testValue = "Omar";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

// Jest test to test the value of ID number
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Noor", testValue);
  expect(e.getId()).toBe(testValue);
});

// Jest test to test the value of email address
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Noor", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// Jest test to test the value of role
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Omar", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});