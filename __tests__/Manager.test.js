const Manager = require('../__lib__/Manager');

test('creates new manager', () =>
{
    const employee = new Manager('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', '12-A');
    expect(employee.name).toBe("Meatloaf G. Pig");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.office).toEqual(expect.any(String));
});

test('checks manager methods', () =>
{
    const employee = new Manager('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', '12-A');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOffice()).toBe(employee.office);
    expect(employee.getRole()).toBe('Manager');
});