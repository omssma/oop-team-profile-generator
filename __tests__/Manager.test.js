const Manager = require("../lib/Manager");

// Jest test to test the value of officeNumber
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

// Jest test to test the vlaue of role
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Noor", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

// Jest test to test the value of OfficeNumber
test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Noor", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});