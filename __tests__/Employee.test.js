const Employee = require('../__lib__/Employee');

test('creates new employee', () =>
{
    const employee = new Employee('Meatloaf G. Pig', 1234, 'stinkman@gmail.com');

    expect(employee.name).toBe("Meatloaf G. Pig");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('checks employee methods', () =>
{
    const employee = new Employee('Meatloaf G. Pig', 1234, 'stinkman@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});