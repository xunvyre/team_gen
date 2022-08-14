const { Intern } = require('../__lib__/Intern');

test('creates new intern', () =>
{
    const employee = new Intern('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', 'PigU');
    expect(employee.name).toBe("John Smith");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('checks intern methods', () =>
{
    const employee = new Intern('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', 'PigU');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
});